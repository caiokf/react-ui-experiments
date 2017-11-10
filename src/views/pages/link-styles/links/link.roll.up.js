import React, { Component } from 'react'
import styled from 'styled-components'
import colors from '../colors'

export default class LinkRollUp extends Component {
  render() {
    return (
      <Link {...this.props}>
        <span data-hover={this.props.hoverContent || this.props.children}>
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
  padding: 0 4px;

  &:hover, &:focus {
    outline: none;
  }

  span {
    position: relative;
    display: inline-block;
    transition: transform 0.3s;

    &::before {
      position: absolute;
      top: 100%;
      content: attr(data-hover);
      font-weight: 700;
      transform: translate3d(0,0,0);
    }
  }

  &:hover span {
    transform: translateY(-100%);
  }
`
