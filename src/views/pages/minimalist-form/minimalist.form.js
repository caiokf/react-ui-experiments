import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import _ from 'lodash'

import colors from './colors'
import Progress from './minimalist.form.progress'
import Counter from './minimalist.form.counter'
import ArrowButton from './minimalist.form.arrow.button'

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
      progress: currentProgress,
      current: this.state.current + 1,
    })

    this.submit()
  }

  submit() { }

  renderQuestionItem(question, index) {
    const currentClass = index === this.state.current ? 'current' : ''

    return (
      <QuestionItem className={currentClass}>
        <span>
          <QuestionStatement
            className={currentClass}
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

          <div>
            <ArrowButton onClick={(ev) => this.next(ev)} />

            <Progress progress={this.state.progress} />

            <Counter current={this.state.current + 1} total={this.props.questions.length} />

            <span class="error-message"></span>
          </div>

          <Submit type="submit">Send answers</Submit>
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
