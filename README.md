# CORRECTIV.Mapple

A prototype for rendering bivariate choropleth maps for european NUTS regions
via a simple Google Spreadsheet.

[See how it works](https://correctiv.github.io/mapple/)

**TODO**: add NUTS2 level

Based on [Webpack Frontend Starterkit (including riotjs)](https://github.com/simonwoerpel/webpack-es6-riotjs-startkit)

## Webpack Frontend Starterkit (including riotjs)

Based on https://github.com/wbkd/webpack-starter

[![Greenkeeper badge](https://badges.greenkeeper.io/wbkd/webpack-starter.svg)](https://greenkeeper.io/)

A lightweight foundation for your next webpack based frontend project.


### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```

### Features:

* ES6 Support via [babel](https://babeljs.io/) (v7)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
