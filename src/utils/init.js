import { STORE, CONTROL, EVENTS } from '~/events.js'
import geoData from '~/data/geodata.js'
import prepareData from './prepare_data.js'
import { loadSpreadsheet, validateConfig, validateData } from './load.js'

const geoMerge = ({ data, x, y, name, country }) => {
  // init store
  STORE.data = geoData[STORE.config.nuts_level]

  STORE.data.features.map(f => {
    const id = f.properties.NUTS_ID
    const d = data[id]
    if (d) {
      f.active = true
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
    } else {
      // empty data
      f.color = '#f5f5f5'
    }
    return f
  })

  if (STORE.config.hide_empty === 'yes') {
    // filter out features w/o data (they don't exist in spreadsheet)
    STORE.data.features = STORE.data.features.filter(f => f.active)
  }
}

// it may be that we already have errors before the app is mounted,
// then do this:
CONTROL.on(EVENTS.error, ({ code, msg }) => {
  CONTROL.trigger(EVENTS.loaded) // end loading spinner
  const maple = document.getElementById('maple')
  if (maple.innerHTML === '') {
    // app not mounted
    maple.innerHTML = `<div class="maple-error">
      ${msg}:<br><strong>${code}</strong></div>`
  }
})

export default (gId, cb) => {
  // these functions may throw errors via the event bus
  loadSpreadsheet(gId, 'Config', configData => {
    validateConfig(configData, _config => {
      loadSpreadsheet(gId, 'Data', _data => {
        const { data, config, x, y, name, country } = prepareData(
          _data,
          _config
        )
        validateData(config, data, () => {
          STORE.config = config
          geoMerge({ data, x, y, name, country })
          cb()
        })
      })
    })
  })
}
