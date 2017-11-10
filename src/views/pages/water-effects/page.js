import React, { Component } from 'react'
import styled from 'styled-components'
import Layout from 'views/pages/layout'
import * as PIXI from 'pixi.js'

import colors from './colors'
import FilteredImage from './filtered.image'

export default class WaterEffectsPage extends Component {
  render() {
    const props = {
      foreground: colors.foreground,
      background: colors.background,
    }

    return (
      <Layout title="Water Effects" {...props}>
        <Container>
          <FilteredImage
            image={'/assets/ryan-wilson-18905.jpg'}
            texture={'/assets/clouds.jpg'}
            textureMovement={(texture, delta) => {
              texture.x += 2 * delta
              texture.y += 3
            }}
            />
        </Container>
      </Layout>
    )
  }
}
const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  right: 0;
`
