import RobotstxtPlugin from "../RobotstxtWebpackPlugin";
import test from "ava";
import webpack from "webpack";
import webpackConfigBase from "./configs/config-base";

const robotstxtPluginBaseOptions = {};

test.cb("should execute successfully", t => {
  t.plan(5);

  const options = Object.assign({}, robotstxtPluginBaseOptions);

  webpackConfigBase.plugins = [new RobotstxtPlugin(options)];

  webpack(webpackConfigBase, (error, stats) => {
    if (error) {
      throw error;
    }

    t.true(stats.compilation.warnings.length === 0, "no compilation warnings");
    t.true(stats.compilation.errors.length === 0, "no compilation error");
    t.true(
      stats.compilation.assets["robots.txt"] !== null,
      "robots.txt in assets"
    );
    t.true(stats.compilation.assets["robots.txt"].size() > 0);
    t.true(stats.compilation.assets["robots.txt"].source().length > 0);

    t.end();
  });
});

test.cb("should execute successfully without options", t => {
  t.plan(5);

  webpackConfigBase.plugins = [new RobotstxtPlugin()];

  webpack(webpackConfigBase, (error, stats) => {
    if (error) {
      throw error;
    }

    t.true(stats.compilation.warnings.length === 0, "no compilation warnings");
    t.true(stats.compilation.errors.length === 0, "no compilation error");
    t.true(
      stats.compilation.assets["robots.txt"] !== null,
      "robots.txt in assets"
    );
    t.true(stats.compilation.assets["robots.txt"].size() > 0);
    t.true(stats.compilation.assets["robots.txt"].source().length > 0);

    t.end();
  });
});

test.cb("should execute successfully using `dest` option", t => {
  t.plan(5);

  const options = Object.assign({}, robotstxtPluginBaseOptions);

  options.filePath = "build/nested/dir/robots.txt";
  webpackConfigBase.plugins = [new RobotstxtPlugin(options)];

  webpack(webpackConfigBase, (error, stats) => {
    if (error) {
      throw error;
    }

    t.true(stats.compilation.warnings.length === 0, "no compilation warnings");
    t.true(stats.compilation.errors.length === 0, "no compilation error");
    t.true(
      stats.compilation.assets[options.filePath] !== null,
      "robots.txt in assets"
    );
    t.true(stats.compilation.assets[options.filePath].size() > 0);
    t.true(stats.compilation.assets[options.filePath].source().length > 0);

    t.end();
  });
});

test.cb("should throw error on invalid `generate-robotstxt` options", t => {
  t.plan(2);

  const options = Object.assign({}, robotstxtPluginBaseOptions);

  options.policy = {};

  webpackConfigBase.plugins = [new RobotstxtPlugin(options)];

  webpack(webpackConfigBase, (error, stats) => {
    if (error) {
      throw error;
    }

    t.true(stats.compilation.warnings.length === 0, "no compilation warnings");
    t.true(stats.compilation.errors.length === 1, "compilation error");
    t.end();
  });
});
