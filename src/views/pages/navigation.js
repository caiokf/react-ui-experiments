import React, { Component } from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'
import css from 'views/styles'
import { lighten, darken } from 'polished'
import { Link } from 'react-router-dom'

class NavigationBar extends Component {
  render() {
    const props = {
      background: '#000000',
      foreground: '#FFFFFF',
      ...this.props,
    }

    return (
      <Navigation {...props}>

        <NavigationLink to={'/'} title='Back to Home' {...props}>
          <BackButtonIcon height="18px" viewBox="0 0 32 32" width="18px">
            <path d="M28,14H8.8l4.62-4.62C13.814,8.986,14,8.516,14,8c0-0.984-0.813-2-2-2c-0.531,0-0.994,0.193-1.38,0.58l-7.958,7.958  C2.334,14.866,2,15.271,2,16s0.279,1.08,0.646,1.447l7.974,7.973C11.006,25.807,11.469,26,12,26c1.188,0,2-1.016,2-2  c0-0.516-0.186-0.986-0.58-1.38L8.8,18H28c1.104,0,2-0.896,2-2S29.104,14,28,14z"/>
          </BackButtonIcon>
        </NavigationLink>

        <NavigationLink to={this.props.history.location} replace title='Refresh this demo' {...props}>
          <RefreshButtonIcon height="18px" width="18px" viewBox="0 0 32 32">
            <path d="M28,16c-1.219,0-1.797,0.859-2,1.766C25.269,21.03,22.167,26,16,26c-5.523,0-10-4.478-10-10S10.477,6,16,6  c2.24,0,4.295,0.753,5.96,2H20c-1.104,0-2,0.896-2,2s0.896,2,2,2h6c1.104,0,2-0.896,2-2V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v0.518  C21.733,2.932,18.977,2,16,2C8.268,2,2,8.268,2,16s6.268,14,14,14c9.979,0,14-9.5,14-11.875C30,16.672,28.938,16,28,16z"/>
          </RefreshButtonIcon>
        </NavigationLink>
      </Navigation>
    )
  }
}
const BackButtonIcon = styled.svg`
`
const RefreshButtonIcon = styled.svg`
  padding-top: 5px;
`
const NavigationLink = styled(Link)`
  display: inline-block;
  padding: 0 1.5em 0 1.25em;
  outline: none;
  text-decoration: none;
  color: inherit;

  svg {
    fill: ${props => props.foreground};
    stroke: none;
  }
`
const Navigation = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2.75em;
  margin: 0 0 0 2.25em;
  text-align: center;
  white-space: nowrap;

  color: ${props => props.foreground};

  background-color: ${props => props.darken ?
    darken(0.25, props.background) :
    lighten(0.25, props.background)
  };

  &::after {
    content: '';
    position: absolute;
    top: -10%;
    left: calc(50% - 1px);
    width: 2px;
    height: 120%;
    background: ${props => props.background};
    transform: rotate3d(0,0,1,22.5deg);
  }
`

export default withRouter(NavigationBar)
