import '~/index.scss'

import * as riot from 'riot'
import init from '~/utils/init.js'
import Mapple from '~/mapple.riot'
import MappleDocs from '~/pages/docs.riot'

const examples = {
  // spreadsheets with random data
  // they need to be shared w/ "anyone who has the link can view"
  nuts1: '1ITX6h4hDZY9xPs2S2rdPtd9BZrjjQgF3BXLb3dhsA8A',
  nuts3: '1wsqhDXq0eEI8HVqgWf3miZTze-RD_hpDwgU0SgSYavE'
}

// get config from url, like
// https://mapple.correctiv.org?gid=1wsqhDXq0eEI8HVqgWf3miZTze-RD_hpDwgU0SgSYavE
const gId = window.location.search.slice(1)

if (gId) {
  init(gId, () => {
    const mountApp = riot.component(Mapple)
    const app = mountApp(document.getElementById('mapple'))
  })
} else {
  // load correctiv css
  const cssUrl =
    'https://correctiv.org/wp-content/themes/correctiv.org/css/main.css?ver=4.9.10'
  // display info / docs page
  const mountApp = riot.component(MappleDocs)
  const app = mountApp(document.getElementById('mapple'), { cssUrl })
}
