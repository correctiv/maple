import '~/index.scss'

import * as riot from 'riot'
import init from '~/utils/init.js'
import Mapple from '~/mapple.riot'
import MappleDocs from '~/pages/docs.riot'

// get config from url, like
// https://mapple.correctiv.org?gid=1wsqhDXq0eEI8HVqgWf3miZTze-RD_hpDwgU0SgSYavE
// for iframe embed, append `&embed` to the url
const params = window.location.search.slice(1)
const [gId, embed] = params.split('&')

if (gId) {
  init(gId, () => {
    const mountApp = riot.component(Mapple)
    const app = mountApp(document.getElementById('mapple'), { embed })
  })
} else {
  // render documentation
  // load correctiv css
  const cssUrl =
    'https://correctiv.org/wp-content/themes/correctiv.org/css/main.css?ver=4.9.10'
  // display info / docs page
  const mountApp = riot.component(MappleDocs)
  const app = mountApp(document.getElementById('mapple'), { cssUrl })
}
