import React, { Component } from 'react'
import styled from 'styled-components'

export default class MinimalistForm extends Component {
  render() {
    return (
      <NextQuestionButton {...this.props}
        aria-label="Next"
        className="show" />
    )
  }
}
const NextQuestionButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 2.15em;
  display: block;
  padding: 0;
  width: 2em;
  height: 2em;
  border: none;
  background: none;
  color: rgba(0,0,0,0.4);
  text-align: center;
  opacity: 0;
  z-index: 100;
  cursor: pointer;
  transition: transform 0.3s, opacity 0.3s;
  transform: translateX(-20%);
  pointer-events: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:hover {
    color: rgba(0,0,0,0.5);
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '>';
    text-transform: none;
    font-weight: normal;
    font-style: normal;
    font-variant: normal;
    line-height: 2;
    speak: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  &.show {
    opacity: 1;
    transform: translateX(0);
    pointer-events: auto;
  }
`
