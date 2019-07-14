# CORRECTIV.Mapple

A prototype for rendering bivariate choropleth maps for european NUTS regions
via a simple Google Spreadsheet.

[See how it works](https://correctiv.github.io/mapple/)

The urls to the Google Spreadsheet templates are located in `src/pages/examples.js`

The index page (documentation) is a markdown that is located in `src/pags/docs.md`

The shapefiles are [obtained from Eurostat](https://ec.europa.eu/eurostat/web/gisco/geodata/reference-data/administrative-units-statistical-units/nuts),
a bit cropped, simplified and compressed to [topojson](https://github.com/topojson/topojson).

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
