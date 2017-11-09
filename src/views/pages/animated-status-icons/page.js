import React, { Component } from 'react'
import styled from 'styled-components'
import Layout from 'views/pages/layout'

import colors from './colors'
import WarningIcon from './icon.warning'
import SuccessIcon from './icon.success'
import ErrorIcon from './icon.error'

export default class AnimatedStatusIconsPage extends Component {
  render() {
    const props = {
      foreground: colors.foreground,
      background: colors.background,
    }

    return (
      <Layout title="Animated Status Icons" {...props}>
        <Container>
          <div>
            <SuccessIcon />
          </div>

          <div>
            <ErrorIcon />
          </div>

          <div>
            <WarningIcon />
          </div>
        </Container>
      </Layout>
    )
  }
}
const Container = styled.div`
  background: ${colors.background};
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
`
