import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import colors from './colors'

const rotatePlaceholder = keyframes`
  0%, 5% { transform: rotate(-45deg); }
  100%, 12% { transform: rotate(-405deg); }
`
export const Icon = styled.div`
  border-radius: 50%;
  border: 4px solid gray;
  box-sizing: content-box;
  height: 80px;
  margin: 20px auto;
  padding: 0;
  position: relative;
  width: 80px;
  display: inline-block;
`
export const Fix = styled.div`
  background-color: ${colors.background};
  height: 90px;
  left: 28px;
  position: absolute;
  top: 8px;
  transform: rotate(-45deg);
  width: 5px;
  z-index: 1;
`
export const Placeholder = styled.div`
  border-radius: 50%;
  box-sizing: content-box;
  height: 80px;
  left: -4px;
  position: absolute;
  top: -4px;
  width: 80px;
  z-index: 2;
`
export const AnimatedBorderIcon = Icon.extend`
  &:after,
  &:before {
    background: ${colors.background};
    content: '';
    height: 120px;
    position: absolute;
    transform: rotate(45deg);
    width: 60px;
  }

  &:before {
    border-radius: 120px 0 0 120px;
    left: -33px;
    top: -7px;
    transform-origin: 60px 60px;
    transform: rotate(-45deg);
  }

  &:after {
    border-radius: 0 120px 120px 0;
    left: 30px;
    top: -11px;
    transform-origin: 0 60px;
    transform: rotate(-45deg);
    animation: ${rotatePlaceholder} 4.25s ease-in;
  }
`
