import React, { Component } from 'react'
import styled from 'styled-components'
import colors from '../colors'

export default class LinkSubtextDoubleLine extends Component {
  render() {
    return (
      <Link {...this.props}>
        <span>{this.props.children}</span>
        <span>{this.props.subtext}</span>
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
  margin: 0 20px;
	padding: 18px 20px;

  &:hover, &:focus {
    outline: none;
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${colors.foreground};
    content: '';
    opacity: 0.2;
    transition: opacity 0.3s, height 0.3s;
  }

  &::after {
    top: 99%;
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;
    transform: translateY(-10px);
    box-sizing: border-box;
  }

  &:hover,
  &:focus {
    &::before {
      height: 6px;
    }

    &::before,
    &::after {
      opacity: 1;
      transform: translateY(0px);
    }

    span:last-child {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  span:first-child {
    z-index: 2;
    display: block;
    font-weight: 300;
  }

  span:last-child {
    z-index: 1;
    display: block;
    padding: 8px 0 0 0;
    color: rgba(0,0,0,0.4);
    text-shadow: none;
    text-transform: none;
    font-style: italic;
    font-size: 0.75em;
    font-family: Georgia, serif;
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;
    transform: translateY(-100%);
  }
`
