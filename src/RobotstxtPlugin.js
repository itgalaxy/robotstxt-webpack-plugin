import robotstxt from "generate-robotstxt";
import { RawSource } from "webpack-sources";

export default class RobotstxtPlugin {
  constructor(options = {}) {
    this.options = Object.assign(
      {
        filePath: "robots.txt"
      },
      options
    );
  }

  apply(compiler) {
    const plugin = { name: "RobotstxtPlugin" };

    compiler.hooks.compilation.tap(plugin, compilation => {
      compilation.hooks.additionalAssets.tapPromise(plugin, () =>
        robotstxt(this.options)
          .then(contents => {
            compilation.assets[this.options.filePath] = new RawSource(contents);

            return contents;
          })
          .catch(error => {
            compilation.errors.push(error);
          })
      );
    });
  }
}
