import * as d3 from 'd3'

export default (data, config) => {
  // accessors
  const x = d => Number(d[config.value1])
  const y = d => Number(d[config.value2])
  const id = d => d[config.nuts_id]
  const name = d => d[config.nuts_name]
  const country = d => d[config.cntr_name]

  // filter out empty data
  data = data.filter(d => x(d) && y(d))

  // calculate bivariate
  const extentX = d3.extent(data, x)
  const extentY = d3.extent(data, y)

  const xBuckets = ['X1', 'X2', 'X3']
  const yBuckets = ['Y1', 'Y2', 'Y3']
  config.value1_reverse === 'yes' && xBuckets.reverse() && extentX.reverse()
  config.value2_reverse === 'yes' && yBuckets.reverse() && extentY.reverse()

  const getXBucket = d3
    .scaleQuantile()
    .domain(extentX)
    .range(xBuckets)
  const getYBucket = d3
    .scaleQuantile()
    .domain(extentY)
    .range(yBuckets)

  // colors
  const colors = {
    // http://www.joshuastevens.net/cartography/make-a-bivariate-choropleth-map/
    // X1Y1: '#e8e6f2',
    // X1Y2: '#b5d3e7',
    // X1Y3: '#4fadd0',
    // X2Y1: '#e5b4d9',
    // X2Y2: '#b8b3d8',
    // X2Y3: '#3983bb',
    // X3Y1: '#de4fa6',
    // X3Y2: '#b03598',
    // X3Y3: '#2a1a8a'
    X1Y1: '#e8e8e8',
    X1Y2: '#b0d5df',
    X1Y3: '#64acbe',
    X2Y1: '#e4acac',
    X2Y2: '#ad9ea5',
    X2Y3: '#627f8c',
    X3Y1: '#c85a5a',
    X3Y2: '#985356',
    X3Y3: '#574249'
  }

  // add color based on buckets
  data.map(d => {
    const xBucket = getXBucket(x(d))
    const yBucket = getYBucket(y(d))
    const bucket = xBucket + yBucket
    d.color = colors[bucket]
    d.bucket = bucket
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
