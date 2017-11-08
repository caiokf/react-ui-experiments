import React, { Component } from 'react'
import styled from 'styled-components'
import css from 'views/styles'
import { lighten, darken } from 'polished'
import { Link } from 'react-router-dom'

export default class NavigationBar extends Component {
  render() {
    const props = {
      background: '#000000',
      foreground: '#FFFFFF',
      ...this.props,
    }

    return (
      <Navigation {...props}>
        <NavigationLink to={'/'} title='Back to Home'>

          {/*<svg class="icon icon--arrow">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow"></use>
          </svg>*/}
          B
        </NavigationLink>

        <NavigationLink to={'.'} title='Refresh this demo'>

          R
          {/*<svg class="icon icon--drop">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-drop"></use>
          </svg>*/}
        </NavigationLink>
      </Navigation>
    )
  }
}

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
const NavigationLink = styled(Link)`
  display: inline-block;
  padding: 0 1.5em;
  outline: none;
  text-decoration: none;
  color: inherit;
`
