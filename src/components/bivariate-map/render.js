import * as d3 from 'd3'

import { CONTROL, EVENTS, STORE } from '~/events.js'

export default selector => {
  const element = d3.select(selector)
  const geoData = STORE.data

  const path = d3
    .geoPath()
    .projection(d3.geoMercator().fitSize([1024, 1024], geoData))

  const svg = element
    .append('svg')
      .attr('class', 'mapple-bivariate-map__svg')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', '0 0 1024 1024')
      // .call(d3.zoom().on('zoom', function () {
      //   svg.attr('transform', d3.event.transform)
      // }))

   return svg.append('g')
      .selectAll('path')
      .data(geoData.features)
      .enter()
    .append('path')
      .attr('class', 'mapple-bivariate-map__path')
      .attr('d', path)
    .attr('fill', ({ color }) => color)
      .on('mouseover', d => {
        CONTROL.trigger(EVENTS.hilight, d.id)
        CONTROL.trigger(EVENTS.updateInfobox, d.properties)
      })
}
