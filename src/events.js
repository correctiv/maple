import * as d3 from 'd3'
import observable from 'riot-observable'

const { origin, pathname } = window.location

// store
const STORE = {
  baseUrl: origin + pathname
} // see `utils/init.js`

// event names
const EVENTS = {
  updateInfobox: 'uib',
  hideInfobox: 'hib',
  clearResults: 'cr',
  hilight: 'h',
  unhilight: 'u',
  loaded: 'l',
  error: 'e'
}

// event bus
const CONTROL = observable()

CONTROL.on(EVENTS.error, e => (STORE.error = e))

// remove loading stuff
CONTROL.on(EVENTS.loaded, () => {
  const loading = document.getElementById('loading')
  loading && loading.classList.add('fading')
  loading && setTimeout(() => loading.parentNode.removeChild(loading), 1000)
})

export { STORE, EVENTS, CONTROL }
