import { STORE } from '~/events.js'
import { validateConfig, loadSpreadsheet } from '~/utils/load.js'

export default (gId, cb) => {
  if (gId && gId.length === 44) {
    // test url & validate
    loadSpreadsheet(gId, 'Config', config =>
      validateConfig(config, () => {
        const directUrl = STORE.baseUrl + `?${gId}`
        const iframeUrl = directUrl + '&embed'
        const iframe = `<iframe src="${iframeUrl}"
          frameborder="0" scrolling="no" width="100%"
          onload="this.style.height=this.getBoundingClientRect().width + 'px' || '800px'">
        </iframe>`

        // state
        cb({
          gId,
          directUrl,
          iframeUrl,
          iframe,
          loading: false,
          urlError: false
        })
      })
    )
  } else cb({ error: false, urlError: true, loading: false })
}
