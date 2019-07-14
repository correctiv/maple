import * as d3 from 'd3'
import geoData from '~/data/geodata.js'
import { CONTROL, EVENTS, STORE } from '~/events.js'

const loadSpreadsheet = (gId, sheet, cb) => {
  const url = `https://docs.google.com/spreadsheets/d/${gId}/gviz/tq?tqx=out:csv&sheet=${sheet}`
  STORE.googleUrl = `https://docs.google.com/spreadsheets/d/${gId}/`
  d3.csv(url)
    .then(data => cb(data))
    .catch(e =>
      CONTROL.trigger(EVENTS.error, {
        code: e,
        msg: `There was an error loading your spreadsheet with id ${gId}`
      })
    )
}

const pivot = data => {
  const _data = {}
  data.map(({ key, value }) => {
    _data[key] = value
  })
  return _data
}

// small attempt to validate if the spreadsheet is correct,
// can definetly be improved. This is basically only a test
// if all config keys are present
const configKeys = [
  'title',
  'intro',
  'nuts_id',
  'nuts_name',
  'cntr_name',
  'value1',
  'value1_label',
  'unit1',
  'data1_info',
  'data1_url',
  'value2',
  'value2_label',
  'unit2',
  'data2_info',
  'data2_url',
  'hide_empty',
  'tooltip_title',
  'tooltip_description',
  'app_maxwidth',
  'legend_text',
  'nuts_level'
]
const validateConfig = (configData, cb) => {
  const config = pivot(configData)
  configKeys.map(k => {
    if (!config[k]) {
      const code = `"${k}" is empty`
      const msg = `Something is wrong with your spreadsheet.
        Please follow the specification in the example templates`
      CONTROL.trigger(EVENTS.error, { code, msg })
      return false
    }
  })
  cb(config)
}

// data validation
// FIXME improve data validation

const dataError = {
  code: 'general data error',
  msg: `Something is wrong with your spreadsheet data.
    Make sure all numbers are well formatted.
    Make sure you are using the right columns as set in your Config spreadsheet.
    Please follow the specification in the example templates`
}

const validateData = (config, data, cb) => {
  // if these keys are empty, it means something went wrong in
  // `utils/prepare_data.js`
  ;['extentX', 'extentY', 'colors', 'xBuckets', 'yBuckets'].map(k => {
    if (!config[k]) {
      CONTROL.trigger(EVENTS.error, dataError)
      return false
    } else if (config[k].map) {
      config[k].map(i => {
        !i && CONTROL.trigger(EVENTS.error, dataError)
        return false
      })
    }
    // FIXME data validation: test if all columns are as expected
  })
  cb()
}

export { loadSpreadsheet, validateConfig, validateData }
