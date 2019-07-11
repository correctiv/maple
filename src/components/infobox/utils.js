import * as d3 from 'd3'

const loc = d3.formatLocale({
  thousands: '.',
  decimal: ',',
  grouping: [3]
})

const format = loc.format(',')

const formatNumber = value => (value ? format(value) : '')

export { formatNumber }
