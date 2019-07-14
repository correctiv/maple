import * as d3 from 'd3'
import * as topojson from 'topojson'

const nuts0 = require('./Europe_Cropped_NUTS0.topo.json')
const nuts1 = require('./Europe_Cropped_NUTS1.topo.json')
const nuts2 = require('./Europe_Cropped_NUTS2.topo.json')
const nuts3 = require('./Europe_Cropped_NUTS3.topo.json')

// access it later via geoData[nuts_level]
const geoData = {
  nuts0: topojson.feature(nuts0, nuts0.objects.Europe_Cropped_NUTS0),
  nuts1: topojson.feature(nuts1, nuts1.objects.Europe_Cropped_NUTS1),
  nuts2: topojson.feature(nuts2, nuts2.objects.Europe_Cropped_NUTS2),
  nuts3: topojson.feature(nuts3, nuts3.objects.Europe_Cropped_NUTS3)
}

export default geoData
