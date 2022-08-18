# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### 7.0.1 (2022-08-18)


### Bug Fixes

* `tapable` deprecation warnings (`webpack >= v4.0.0`) ([40b6776](https://github.com/itgalaxy/robotstxt-webpack-plugin/commit/40b677646fd55035d4a763c0dad00159dba315bf))
* bump webpack peerDependency ([#122](https://github.com/itgalaxy/robotstxt-webpack-plugin/issues/122)) ([fb4ab6e](https://github.com/itgalaxy/robotstxt-webpack-plugin/commit/fb4ab6eb168ea2de92d4b02d05497e829d6220dc))

## 7.0.0 - 2019-11-05

- Changed: minimum require Node.js version is `10.13.0`.

## 6.0.0 - 2019-07-03

- Changed: use `additionalAssets` hook for adding assets.
- Changed: minimum require Node.js version is `8.9.0`.

## 5.0.0 - 2019-01-09

### BREAKING CHANGE

- Feature: rename `RobotstxtWebpackPlugin` to `RobotstxtPlugin`.
- Feature: exports plugin as `cjs` by default (no need use `default` for `require` in `webpack.config.js`).
- Chore: minimum require `webpack` version is `4`.
- Chore: minimum require `nodejs` version is `6`.

## 4.0.1 - 2018-02-26

- Fixed: `tapable` deprecation warnings (`webpack >= v4.0.0`).

## 4.0.0 - 2017-11-15

- Chore **Breaking Changes**: minimum required `generate-robotstxt` version is
  now `^5.0.0`.

## 3.0.2 - 2017-10-10

- Chore: republish new version, because old was break.

## 3.0.1 - 2017-10-10

- Chore: republish new version, because old was break.

## 3.0.0 - 2017-10-09

- Changed: rename from `dest` to `filePath`.
- Changed: `dest` should contain file name (example - `/path/to/robots.txt`).

## 2.0.0 - 2017-06-20

- Chore: support `webpack` v3.
- Changed: minimum require `nodejs` version is now `4.3`.

## 1.0.1 - 2017-02-01

- Fixed: added `webpack` as peer dependencies.

## 1.0.0 - 2016-11-11

- Documentation: improve `README.md`.

## 1.0.0-alpha.1 - 2016-11-11

- Chore: initial public release.
