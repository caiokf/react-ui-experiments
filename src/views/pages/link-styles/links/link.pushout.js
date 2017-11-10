import React, { Component } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import colors from '../colors'

export default class LinkPushOut extends Component {
  render() {
    return (
      <Link {...this.props} data-hover={this.props.hoverContent || this.props.children}>
        <span>{this.props.children}</span>
      </Link>
    )
  }
}

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 30px;
  position: relative;
  display: inline-block;
  margin: 15px 25px;
  outline: none;
  overflow: hidden;
  margin: 0 15px;
  background: ${colors.foreground};

  &:hover, &:focus {
    outline: none;
  }

  span {
    display: block;
    padding: 10px 20px;
    background: ${darken(0.1, colors.background6)};
    transition: transform 0.3s;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    padding: 8px 0;
    width: 100%;
    height: 100%;
    color: ${colors.background6};
    content: attr(data-hover);
    transition: transform 0.3s;
  }

  &:hover,
  &:focus {
    span {
      transform: translateX(100%);
    }

    &::before {
      transform: translateX(0%);
      z-index: 1;
    }
  }
`
