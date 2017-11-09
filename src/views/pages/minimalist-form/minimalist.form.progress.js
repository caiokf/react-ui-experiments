import React, { Component } from 'react'
import styled from 'styled-components'

export default class MinimalistFormProgress extends Component {
  render() {
    return (
      <ProgressBar
        role='progressbar'
        aria-readonly='true'
        aria-valuemin='0'
        aria-valuemax='100'
        aria-valuenow={this.props.progress}
        style={{ width: `${this.props.progress}%`}}
        />
    )
  }
}
const ProgressBar = styled.div`
  height: 0.15em;
  background: rgba(0,0,0,0.3);
  transition: width 0.4s ease-in-out;

  &::before {
    position: absolute;
    top: auto;
    width: 100%;
    height: inherit;
    background: rgba(0,0,0,0.05);
    content: '';
  }
`
