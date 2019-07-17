import * as d3 from 'd3'
import proj4 from 'proj4'

// *Maple* wants to use a proper projection for europe
// Eurostat itself refers to ETRS-LAEA and this seems indeed
// a good suggestion:
//
// ETRS-LAEA
// epsg:3035

// how to use proj4 strings with d3js:
// http://bl.ocks.org/armollica/e6371dcceed6d89312cf6a78be1a0b49


const proj4Projection = proj4(
  '+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
)

const degreesToRadians = degrees => (degrees * Math.PI) / 180
const radiansToDegrees = radians => (radians * 180) / Math.PI

const project = (lambda, phi) =>
  proj4Projection.forward([lambda, phi].map(radiansToDegrees))

project.invert = (x, y) => proj4Projection.inverse([x, y]).map(degreesToRadians)

const projection = d3.geoProjection(project)

export default projection
