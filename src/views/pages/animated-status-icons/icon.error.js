import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import colors from './colors'
import { AnimatedBorderIcon, Placeholder, Fix } from './icon.base'

export default class AnimatedErrorIcon extends Component {
  render() {
    return (
      <ErrorIcon>
        <XMark>
          <ErrorLineLeft />
          <ErrorLineRight />
        </XMark>
        <ErrorPlaceholder />
        <Fix />
      </ErrorIcon>
    )
  }
}
const animateXLeft = keyframes`
  0%, 65% { left: 82px; top: 95px; width: 0; }
  84% { left: 14px; top: 33px; width: 47px; }
  100% { left: 17px; top: 37px; width: 47px; }
`
const animateXRight = keyframes`
  0%, 65% { right: 82px; top: 95px; width: 0; }
  84% { right: 14px; top: 33px; width: 47px; }
  100% { right: 16px; top: 37px; width: 47px; }
`
const ErrorIcon = AnimatedBorderIcon.extend`
  border-color: ${colors.notifications.red};
`
const ErrorPlaceholder = Placeholder.extend`
  border: 4px solid ${colors.notifications.lightRed};
`
const ErrorLine = styled.div`
  background-color: ${colors.notifications.red};
  border-radius: 2px;
  display: block;
  height: 5px;
  position: absolute;
  z-index: 2;
  top: 37px;
  width: 47px;
`
const ErrorLineLeft = ErrorLine.extend`
  left: 17px;
  transform: rotate(45deg);
  animation: ${animateXLeft} .75s;
`
const ErrorLineRight = ErrorLine.extend`
  right: 16px;
  transform: rotate(-45deg);
  animation: ${animateXRight} .75s;
`
const XMark = styled.span`
  display: block;
  position: relative;
  z-index: 2;
`
