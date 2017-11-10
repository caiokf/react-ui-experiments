import React, { Component } from 'react'
import styled from 'styled-components'
import Layout from 'views/pages/layout'
import * as PIXI from 'pixi.js'

import colors from './colors'

export default class FilteredImage extends Component {
  loadImage(url, x, y) {
    const image = PIXI.Sprite.fromImage(url)
    image.anchor.set(0.5)
    image.x = x
    image.y = y
    return image
  }

  componentDidMount() {
    const app = new PIXI.Application()
    this.container.appendChild(app.view)
    app.view.style.width = '100%'
    app.view.style.height = '100vh'
    const x = app.renderer.width / 2
    const y = app.renderer.height / 2

    const image = this.loadImage(this.props.image, x, y)
    const filter = this.loadImage(this.props.texture, x, y)

    app.stage.addChild(image)
    app.stage.addChild(filter)

    filter.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT
    const displacement = new PIXI.filters.DisplacementFilter(filter)
    app.stage.filters = [displacement]

    app.ticker.add(delta => {
      this.props.textureMovement(filter, delta)
    })
  }

  render() {
    const props = {
      foreground: colors.foreground,
      background: colors.background,
    }

    return (
      <div ref={(el) => { this.container = el }}>
      </div>
    )
  }
}
