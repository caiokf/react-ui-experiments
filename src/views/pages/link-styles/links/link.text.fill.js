import React, { Component } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import colors from '../colors'

export default class LinkTextFill extends Component {
  render() {
    return (
      <Link {...this.props} data-hover={this.props.hoverContent || this.props.children}>
        {this.props.children}
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
  padding: 10px 0;
  color: rgba(0, 0, 0, 0.3);
  text-shadow: none;

  &:hover, &:focus {
    outline: none;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    padding: 10px 0;
    max-width: 0;
    color: ${colors.foreground};
    content: attr(data-hover);
    transition: max-width 0.5s;
    white-space: nowrap;
  }

  &:hover,
  &:focus {
    &::before {
      max-width: 100%;
    }
  }
`
