import React, { Component } from 'react'
import styled from 'styled-components'
import css from 'views/styles'
import { lighten } from 'polished'

import Navigation from 'views/pages/navigation'
import GithubCorner from 'views/pages/github-corner/github.corner.icon'

export default class Layout extends Component {
  render() {
    const colors = {
      background: this.props.background || '#FFFFFF',
      foreground: this.props.foreground || '#000000',
    }

    return (
      <Body {...colors}>
        <Header>
          <Navigation {...colors} darken/>

          <Title {...colors}>{this.props.title}</Title>

          <GithubCorner href={'#'} {...colors}/>
        </Header>

        <Main>
          {this.props.children}
        </Main>
      </Body>
    )
  }
}

const Body = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: stretch;
  background-color: ${props => props.background};
  color: ${props => props.foreground}
`
const Header = styled.header`
  padding: ${css.dimensions.medium};
  z-index: 100;
  display: flex;
  align-items: center;
  width: 100%;
`
const quotes = `
  padding: 0 .5em;
  display: inline-block;
`
const Title = styled.h2`
  flex: 1;

  &::before {
    ${quotes}
    content: '\\230A';
    color: ${props => lighten(0.25, props.foreground)}
  }

  &::after {
    ${quotes}
    content: '\\2309';
    color: ${props => lighten(0.25, props.foreground)}
  }
`
const Main = styled.main`
  padding: ${css.dimensions.medium};
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 25rem;
`
