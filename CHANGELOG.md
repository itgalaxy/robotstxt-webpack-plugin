# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [8.0.0](https://github.com/itgalaxy/robotstxt-webpack-plugin/compare/v7.0.0...v8.0.0) (2022-08-29)


### ⚠ BREAKING CHANGES

* minimum supported webpack version is `5`
* minimum supported Node.js version is `14.15.0`

### Bug Fixes

* compatibility with webpack v5 ([#131](https://github.com/itgalaxy/robotstxt-webpack-plugin/issues/131)) ([ee22312](https://github.com/itgalaxy/robotstxt-webpack-plugin/commit/ee22312daad1f0f24e2cd390943721bec49151cf))

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
