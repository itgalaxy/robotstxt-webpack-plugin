import nodeify from "nodeify";
import robotstxt from "generate-robotstxt";

export default class RobotstxtWebpackPlugin {
  constructor(options = {}) {
    this.options = Object.assign(
      {
        filePath: "robots.txt"
      },
      options
    );
  }

  apply(compiler) {
    const generateFn = (compilation, callback) => {
      this.generate(compilation, callback);
    };

    if (compiler.hooks) {
      const plugin = { name: "RobotstxtPlugin" };

      compiler.hooks.emit.tapAsync(plugin, generateFn);
    } else {
      compiler.plugin("emit", generateFn);
    }
  }

  generate(compilation, callback) {
    return nodeify(
      robotstxt(this.options).then(contents => {
        compilation.assets[this.options.filePath] = {
          size() {
            return Buffer.byteLength(this.source(), "utf8");
          },
          source() {
            return contents;
          }
        };

        return contents;
      }),
      error => {
        if (error) {
          compilation.errors.push(error);
        }

        return callback();
      }
    );
  }
}
