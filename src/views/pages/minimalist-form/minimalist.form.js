import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import _ from 'lodash'

import colors from './colors'
import Progress from './minimalist.form.progress'

export default class MinimalistForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      current: 0,
      progress: 0,
      animatingNextQuestion: false,
    }
  }

  inputKeyDown(ev) {
    const keyCode = ev.keyCode || ev.which

    if (keyCode === 13) {
      this.next(ev)
    }
  }

  next(ev) {
    ev.preventDefault()

    const currentQuestion = this.props.questions[this.state.current]
    const nextQuestion = this.state.current + 1
    const currentProgress = nextQuestion * ( 100 / this.props.questions.length )

    this.setState({
      //animatingNextQuestion: true,
      progress: currentProgress,
      current: this.state.current + 1,
    })

    setTimeout(() => { this.setState({
      animatingNextQuestion: false,
      //current: this.state.current + 1,
    })}, 400)

    this.submit()
  }

  submit() { }

  renderQuestionItem(question, index) {
    const currentClass = index === this.state.current ? 'current' : ''
    const formAnimatingClass = this.state.animatingNextQuestion ? 'animating-next' : ''
    const labelClasses = `${currentClass} ${formAnimatingClass}`

    return (
      <QuestionItem className={currentClass}>
        <span>
          <QuestionStatement
            className={labelClasses}
            for={`question-${index}`}>

            {question.statement}
          </QuestionStatement>
        </span>

        <QuestionInput
          autocomplete="off"
          onKeyDown={(ev) => this.inputKeyDown(ev)}
          className={currentClass}
          id={`question-${index}`}
          name={`question-${index}`}
          type={question.type} />

      </QuestionItem>
    )
  }

  render() {
    const formAnimatingClass = this.state.animatingNextQuestion ? 'animating-next' : ''

    return (
      <StyledForm {...this.props} className={formAnimatingClass}>
        <div class="simform-inner">

          <Questions>
            {_.map(this.props.questions, (x, i) => this.renderQuestionItem(x, i))}
          </Questions>

          <Submit type="submit">Send answers</Submit>

          <div class="controls">
            <NextQuestionButton
              onClick={(ev) => this.next(ev)}
              ariaLabel="Next"
              className="show" />

            <Progress progress={this.state.progress} />

            <QuestionCounter className={formAnimatingClass}>
              <QuestionCounterCurrentNumber className={formAnimatingClass}>
                {this.state.current + 1}
              </QuestionCounterCurrentNumber>

              <QuestionCounterTotalNumber>
                {this.props.questions.length}
              </QuestionCounterTotalNumber>
            </QuestionCounter>

            <span class="error-message"></span>
          </div>

        </div>
        <span class="final-message"></span>
      </StyledForm>
    )
  }
}
const moveUpFromDown = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`
const Container = styled.div`
  background: ${colors.background};
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
`
const StyledForm = styled.form`
  position: relative;
  margin: 0 auto;
  padding: 2em 0;
  max-width: 860px;
  width: 100%;
  text-align: left;
  font-size: 2.5em;
`
const Submit = styled.button`
  display: none;
`
const Questions = styled.ol`
  margin: 0 0 -10px 0;
  padding: 0;
  list-style: none;
  position: relative;
  transition: height 0.4s;

  &::before {
    content: '';
    background-color: rgba(0,0,0,0.1);
    position: absolute;
    left: 0;
    bottom: 10px;
    width: 100%;
    height: 2.35em;
  }
`
const QuestionItem = styled.li`
  z-index: 100;
  position: relative;
  visibility: hidden;
  height: 0;
  transition: visibility 0s 0.4s, height 0s 0.4s;

  &.current {
    visibility: visible;
    height: auto;
    transition: none;
  }

  span {
    display: block;
    overflow: hidden;
  }
`
const QuestionStatement = styled.label`
  display: block;
  transition: transform 0.4s;
  transform: translateY(-100%);

  &.current {
    transition: none;
    transform: translateY(0);
  }

  &.animating-next {
    animation: ${moveUpFromDown} 0.4s both;
  }
`
const QuestionInput = styled.input`
  display: block;
  margin: 0.3em 0 0 0;
  padding: 0.2em 1em 0.5em 0.7em;
  width: calc(100% - 2em);
  border: none;
  background: transparent;
  color: ${colors.foreground};
  font-size: 1em;
  line-height: 1;
  opacity: 0;
  transition: opacity 0.3s;
  height: 2.1em;

  &.current {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`
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

  &.animating-next {
  	transition: transform 0.4s;
  	transform: translateY(-100%);
  }
`
const QuestionCounterTotalNumber = styled.span`

`
