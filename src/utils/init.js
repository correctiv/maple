import * as d3 from 'd3'
import { STORE } from '~/events.js'
import geoData from '~/data/geodata.js'
import prepareData from './prepare_data.js'

const loadSpreadsheet = (id, sheet, cb) => {
  const url = `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&sheet=${sheet}`
  d3.csv(url).then(data => cb(data))
}

const pivot = data => {
  const _data = {}
  data.map(({ key, value }) => {
    _data[key] = value
  })
  return _data
}

const geoMerge = ({ data, x, y, name, country }, nuts_level) => {
  // init store
  STORE.data = geoData[STORE.config.nuts_level]

  STORE.data.features.map(f => {
    const id = f.properties.NUTS_ID
    const d = data[id]
    if (d) {
      f.properties.x = x(d)
      f.properties.y = y(d)
      const _name = name(d)
      const _country = country(d)
      f.properties.name = _name
      f.properties.country = _country
      // store search string
      f.properties.search =
        _name.toLowerCase() + _country.toLowerCase() + id.toLowerCase()
      f.color = d.color
    }
    return f
  })
}

export default (gId, cb) => {
  loadSpreadsheet(gId, 'Config', _config => {
    loadSpreadsheet(gId, 'Data', _data => {
      const { data, config, x, y, name, country } = prepareData(
        _data,
        pivot(_config)
      )
      STORE.config = config
      geoMerge({ data, x, y, name, country })
      cb()
    })
  })
}
