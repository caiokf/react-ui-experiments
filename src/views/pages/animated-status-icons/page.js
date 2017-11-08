import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Layout from 'views/pages/layout'

import colors from './colors'

export default class AnimatedStatusIconsPage extends Component {
  render() {
    const props = {
      foreground: colors.foreground,
      background: colors.background,
    }

    return (
      <Layout title="Animated Status Icons" {...props}>
        Animated Status Icons
      </Layout>
    )
  }
}
