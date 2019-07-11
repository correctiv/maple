import './history-chart/history-chart.tag'

<map-infobox if={ data } class="{ getClass() } { -visible: visible }">

  <button class={ getClass('close-btn') } aria-label='Close' onclick={ close }></button>

  <header class={ getClass('header') }>
    <section class={ getClass('header__section') }>
      <span class={ getClass('state') }>Nordrhein-Westfalen</span>
      <h3 class={ getClass('title') }>{ data.name }</h3>
    </section>
    <section class={ getClass('header__section') }>
      <span class={ getClass('population') }><strong>{ _f(data.t) }</strong>&nbsp;Einwohner</span>
      <span class={ getClass('f-ratio') }>davon <strong>{ _f(data.fRatio) }&nbsp;%</strong>&nbsp;Frauen</span>
    </section>
    <span class="-clear-"></span>
  </header>

  <section class={ getClass('section') }>
    <h4 class={ getClass('section__title') }>Anteil der Minijobber</h4>
    <dl>
      <dt>{ _f(data.pwa) }&nbsp;%</dt>
      <dt class="-small">{ _f(data.wa) }</dt>
      <dd class="badge badge--e">ausschließlich</dd>
    </dl>
    <dl>
      <dt>{ _f(data.pwn) }&nbsp;%</dt>
      <dt class="-small">{ _f(data.wn) }</dt>
      <dd class="badge badge--i">Nebenjob</dd>
    </dl>
    <dl>
      <dt>{ _f(data.pwi) }&nbsp;%</dt>
      <dt class="-small">{ _f(data.wi) }</dt>
      <dd class="badge badge--t">Gesamt</dd>
    </dl>
    <span class="-clear-"></span>
  </section>

  <section class={ getClass('section') + ' ' + getClass('section--last') }>
    <h4 class={ getClass('section__title') }>Entwicklung seit 2003</h4>
    <history-chart ref='history-chart' config={ opts.config.historyChart } data={ data } />
  </section>
  <span class="-clear-"></span>

  this.visible = false
  this.data = {}

  riot.control.on(riot.EVT.updateInfobox, data => {
    data.fRatio = Math.round(data.f / data.t * 1000) / 10
    this.update({
      data,
      visible: true,
    })
  })

  riot.control.on(riot.EVT.hideInfobox, () => {
    this.close()
  })

  this.close = () => this.update({visible: false})

</map-infobox>
