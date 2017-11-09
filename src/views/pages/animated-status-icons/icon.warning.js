import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import colors from './colors'
import { Icon } from './icon.base'

export default class AnimatedWarningIcon extends Component {
  render() {
    return (
      <WarningIcon>
        <WarningBody />
        <WarningDot />
      </WarningIcon>
    )
  }
}

const scaleWarning = keyframes`
  0% { transform: scale(1); }
  30% { transform: scale(1.02); }
  100% { transform: scale(1); }
`
const pulseWarning = keyframes`
  0%, 30% {
    background-color: ${colors.background};
    transform: scale(1);
    opacity: 0.5;
  }

  100% {
    background-color: ${colors.notifications.orange};
    transform: scale(2);
    opacity: 0;
  }
`
const pulseWarningIns = keyframes`
  0% { background-color: ${colors.notifications.midOrange}; }
  100% { background-color: ${colors.notifications.orange}; }
`

const WarningIcon = Icon.extend`
  border-color: ${colors.notifications.orange};

  &:before {
    animation: ${pulseWarning} 2s linear infinite;
    background-color: ${colors.background};
    border-radius: 50%;
    content: "";
    display: inline-block;
    height: 100%;
    opacity: 0;
    position: absolute;
    width: 100%;
    left: 0;
  }

  &:after {
    background-color: ${colors.background};
    border-radius: 50%;
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  animation: ${scaleWarning} 0.75s infinite alternate;
`
const WarningBody = styled.span`
  background-color: ${colors.notifications.orange};
  border-radius: 2px;
  height: 47px;
  left: 50%;
  margin-left: -2px;
  position: absolute;
  top: 10px;
  width: 5px;
  z-index: 2;
  animation: ${pulseWarningIns} 0.75s infinite alternate;
`
const WarningDot = styled.span`
  background-color: ${colors.notifications.orange};
  border-radius: 50%;
  bottom: 10px;
  height: 7px;
  left: 50%;
  margin-left: -3px;
  position: absolute;
  width: 7px;
  z-index: 2;
  animation: ${pulseWarningIns} 0.75s infinite alternate;
`
