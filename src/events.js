import * as d3 from 'd3'
import observable from 'riot-observable'

// store
const STORE = {}  // see `utils/init.js`

// event names
const EVENTS = {
  updateInfobox: 'uib',
  hideInfobox: 'hib',
  clearResults: 'cr',
  hilight: 'h',
  unhilight: 'u'
}

// event bus
const CONTROL = observable()

export { STORE, EVENTS, CONTROL }
