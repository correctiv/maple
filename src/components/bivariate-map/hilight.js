const unhilight = hilighted => hilighted && hilighted.classed('-hilight', false)

const hilight = (selection, id, hilighted) => {
  hilighted && unhilight(hilighted)
  const path = selection.select(function(d) {
    return d.id === id && this
  })
  path.node().parentNode.appendChild(path.node())
  path.classed('-hilight', true)
  return path
}

export { hilight, unhilight }
