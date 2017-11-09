import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import colors from './colors'
import { AnimatedBorderIcon, Placeholder, Fix } from './icon.base'

export default class AnimatedSuccessIcon extends Component {
  render() {
    return (
      <SuccessIcon>
        <LineTip />
        <LineLong />
        <SuccessPlaceholder />
        <Fix />
      </SuccessIcon>
    )
  }
}

const animateSuccessTip = keyframes`
  0%, 54% { width: 0; left: 1px; top: 19px; }
  70% { width: 50px; left: -8px; top: 37px; }
  84% { width: 17px; left: 21px; top: 48px; }
  100% { width: 25px; left: 14px; top: 45px; }
`
const animateSuccessLong = keyframes`
  0%, 65% { width: 0; right: 46px; top: 54px; }
  84% { width: 55px; right: 0; top: 35px; }
  100% { width: 47px; right: 8px; top: 38px; }
`
const Line = styled.span`
  background-color: ${colors.notifications.green};
  border-radius: 2px;
  display: block;
  height: 5px;
  position: absolute;
  z-index: 2;
`
const SuccessPlaceholder = Placeholder.extend`
  border: 4px solid ${colors.notifications.lightGreen};
`
const SuccessIcon = AnimatedBorderIcon.extend`
  border-color: ${colors.notifications.green};
`
const LineTip = Line.extend`
  left: 14px;
  top: 46px;
  transform: rotate(45deg);
  width: 25px;
  animation: ${animateSuccessTip} .75s;
`
const LineLong = Line.extend`
  right: 8px;
  top: 38px;
  transform: rotate(-45deg);
  width: 47px;
  animation: ${animateSuccessLong} .75s;
`
