import * as d3 from 'd3'

export default (data, config) => {
  // accessors
  const x = d => d[config.value1]
  const y = d => d[config.value2]
  const id = d => d[config.nuts_id]
  const name = d => d[config.nuts_name]
  const country = d => d[config.cntr_name]

  // parse numbers
  data = data.map(d => {
    d[config.value1] = Number(x(d))
    d[config.value2] = Number(y(d))
    return d
  })

  // calculate bivariate
  const extentX = d3.extent(data, d => d[config.value1])
  const extentY = d3.extent(data, d => d[config.value2])
  const getXBucket = d3
    .scaleQuantile()
    .domain(extentX)
    .range(['X1', 'X2', 'X3'])
  const getYBucket = d3
    .scaleQuantile()
    .domain(extentY)
    .range(['Y1', 'Y2', 'Y3'])

  // colors
  const colors = {
    X1Y1: '#e8e6f2',
    X1Y2: '#b5d3e7',
    X1Y3: '#4fadd0',
    X2Y1: '#e5b4d9',
    X2Y2: '#b8b3d8',
    X2Y3: '#3983bb',
    X3Y1: '#de4fa6',
    X3Y2: '#b03598',
    X3Y3: '#2a1a8a'
  }

  // add color based on buckets
  data.map(d => {
    const xBucket = getXBucket(x(d))
    const yBucket = getYBucket(y(d))
    d.color = colors[xBucket + yBucket]
  })

  config.extentX = extentX
  config.extentY = extentY
  config.colors = colors
  config.xBuckets = getXBucket.quantiles()
  config.yBuckets = getYBucket.quantiles()

  // turn data into object for easy access via id
  const _data = {}
  data.map(d => {
    _data[id(d)] = d
  })
  data = _data

  return { data, config, x, y, name, country }
}
