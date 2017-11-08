import React, { Component } from 'react'
import styled from 'styled-components'
import css from 'views/styles'

import GithubCorner from 'views/pages/github-corner/github.corner.icon'

export default class Layout extends Component {
  render() {
    return (
      <Body>
        <Header>
          <GithubCorner href={'#'} />
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
`
const Header = styled.header`
`
const Main = styled.main`
  padding: ${css.dimensions.medium};
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 25rem;
`
const Footer = styled.footer`
  padding: ${css.dimensions.medium};
  background-color: ${css.colors.teal};
  color: ${css.colors.white};
`
