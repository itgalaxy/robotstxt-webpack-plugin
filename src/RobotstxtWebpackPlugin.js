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
    compiler.plugin("emit", (compilation, callback) =>
      this.generate(compilation, callback)
    );
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
