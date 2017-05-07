# robotstxt-webpack-plugin

[![Greenkeeper badge](https://badges.greenkeeper.io/itgalaxy/robotstxt-webpack-plugin.svg)](https://greenkeeper.io/)

[![NPM version](https://img.shields.io/npm/v/robotstxt-webpack-plugin.svg)](https://www.npmjs.org/package/robotstxt-webpack-plugin) 
[![Travis Build Status](https://img.shields.io/travis/itgalaxy/robotstxt-webpack-plugin/master.svg?label=build)](https://travis-ci.org/itgalaxy/robotstxt-webpack-plugin) 
[![dependencies Status](https://david-dm.org/itgalaxy/robotstxt-webpack-plugin/status.svg)](https://david-dm.org/itgalaxy/robotstxt-webpack-plugin) 
[![devDependencies Status](https://david-dm.org/itgalaxy/robotstxt-webpack-plugin/dev-status.svg)](https://david-dm.org/itgalaxy/robotstxt-webpack-plugin?type=dev)

Webpack plugin for [generate-robotstxt](https://github.com/itgalaxy/generate-robotstxt/) package. 
Generating robots.txt using webpack.

## Install

```shell
npm install --save-dev robotstxt-webpack-plugin
```

## Usage

```js
const RobotstxtPlugin = require('robotstxt-webpack-plugin').default;

const options = {}; // see options below

module.exports = {
  plugins: [
    new RobotstxtPlugin(options)
  ]
}
```

Or

```js
import RobotstxtPlugin from 'robotstxt-webpack-plugin';

const options = {}; // see options below

export default {
  plugins: [
    new RobotstxtPlugin(options)
  ]
};
```

## Options

-   `General options` - see [generate-robotstxt](https://github.com/itgalaxy/generate-robotstxt) options.
-   `dest` - (optional) directory which will be saved robots.txt (relatively of the option `output.path` value).

## Related

-   [generate-robotstxt](https://github.com/itgalaxy/generate-robotstxt) - api for this package.

## Contribution

Feel free to push your code if you agree with publishing under the MIT license.

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
