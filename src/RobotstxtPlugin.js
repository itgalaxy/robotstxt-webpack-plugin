import robotstxt from "generate-robotstxt";

export default class RobotstxtPlugin {
  constructor(options = {}) {
    this.options = Object.assign(
      {
        filePath: "robots.txt",
      },
      options
    );
  }

  apply(compiler) {
    const plugin = { name: this.constructor.name };

    compiler.hooks.compilation.tap(plugin, (compilation) => {
      compilation.hooks.additionalAssets.tapPromise(plugin, () =>
        robotstxt(this.options)
          .then((contents) => {
            const source = new compiler.webpack.sources.RawSource(contents);

            if (compilation.emitAsset) {
              compilation.emitAsset(this.options.filePath, source);
            } else {
              // Remove this after drop support for webpack@4
              compilation.assets[this.options.filePath] = source;
            }

            return contents;
          })
          .catch((error) => {
            compilation.errors.push(error);
          })
      );
    });
  }
}
