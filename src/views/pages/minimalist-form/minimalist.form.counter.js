import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import cuid from 'cuid'

export default class MinimalistFormCounter extends Component {
  render() {
    return (
      <QuestionCounter>
        <QuestionCounterCurrentNumber key={cuid()}>
          {this.props.current}
        </QuestionCounterCurrentNumber>

        <QuestionCounterTotalNumber>
          {this.props.total}
        </QuestionCounterTotalNumber>
      </QuestionCounter>
    )
  }
}
const moveUpFromDown = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`
const QuestionCounter = styled.span`
  position: absolute;
  right: 0;
  overflow: hidden;
  margin: 0.4em 0;
  width: 3em;
  font-weight: 700;
  font-size: 0.6em;

  &::after {
    position: absolute;
    left: 50%;
    content: '/';
    opacity: 0.4;
    transform: translateX(-50%);
  }

  span {
    float: left;
    width: 50%;
    text-align: center;
  }
`
const QuestionCounterCurrentNumber = styled.span`
  float: left;

  animation: ${moveUpFromDown} 0.4s both;
`
const QuestionCounterTotalNumber = styled.span`

`
