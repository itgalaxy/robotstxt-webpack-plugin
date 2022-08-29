import path from "path";
import MemoryFS from "memory-fs";
import del from "del";
import webpack from "webpack";
import RobotstxtPlugin from "../src/RobotstxtPlugin";

const outputConfig = (config) => ({
  path: path.resolve(
    __dirname,
    `../outputs/${config.output ? config.output : ""}`
  ),
  filename: "[name].bundle.js",
});

const moduleConfig = (config) => ({
  rules: config.rules ? config.rules : [],
});

const pluginsConfig = (config) =>
  [].concat(
    config.plugins || [new RobotstxtPlugin(config.pluginOptions || {})]
  );

function compile(fixture, config = {}, options = {}) {
  // webpack Config
  // eslint-disable-next-line no-param-reassign
  config = {
    mode: "development",
    devtool: false,
    context: path.resolve(__dirname, "fixtures"),
    entry: path.resolve(__dirname, "fixtures", fixture),
    output: outputConfig(config),
    module: moduleConfig(config),
    plugins: pluginsConfig(config),
  };

  // Compiler Options
  // eslint-disable-next-line no-param-reassign
  options = Object.assign({ output: false }, options);

  if (options.output) {
    del.sync(config.output.path);
  }

  const compiler = webpack(config);

  if (!options.output) {
    compiler.outputFileSystem = new MemoryFS();
  }

  return new Promise((resolve, reject) =>
    compiler.run((error, stats) => {
      if (error) {
        return reject(error);
      }

      return resolve({ stats, compiler });
    })
  );
}

// eslint-disable-next-line import/prefer-default-export
export { compile as webpack };
