import React, { Component } from 'react'
import styled from 'styled-components'
import colors from '../colors'

export default class LinkScaleDown extends Component {
  render() {
    return (
      <Link {...this.props} data-hover={this.props.hoverContent || this.props.children}>
        <span >
          {this.props.children}
        </span>
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
  color: rgba(0, 0, 0, 0.2);
  font-weight: 700;
  text-shadow: none;

  &:hover, &:focus {
    outline: none;
  }

  &::before {
    color: ${colors.foreground};
    content: attr(data-hover);
    position: absolute;
    transition: transform 0.3s, opacity 0.3s;
  }

  &:hover,
  &:focus {
    &::before {
      transform: scale(0.9);
      opacity: 0;
    }
  }
`
