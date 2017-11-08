import React, { Component } from 'react'
import styled from 'styled-components'
import css from 'views/styles'

export default class Layout extends Component {
  render() {
    return (
      <Body>
        <Header>
          React App Header
        </Header>

        <Main>
          {this.props.children}
        </Main>

        <Footer>
          &copy; 2017 CaioKF footer
        </Footer>
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
  background-color: ${css.colors.teal};
  color: ${css.colors.white};
  position: relative;
  padding: ${css.dimensions.small};
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
