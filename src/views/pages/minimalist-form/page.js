import React, { Component } from 'react'
import styled from 'styled-components'
import Layout from 'views/pages/layout'

import colors from './colors'
import MinimalistForm from './minimalist.form'

export default class MinimalistFormPage extends Component {
  render() {
    const props = {
      foreground: colors.foreground,
      background: colors.background,
    }

    const questions = [
      { statement: `What's your name?`, type: 'text' },
      { statement: `What's your email?`, type: 'email' },
      { statement: `Where do you live?`, type: 'text' },
      { statement: `What's your favorite sport?`, type: 'text' },
      { statement: `Do you like watermelon?`, type: 'text' },
      { statement: `Tell me something new...`, type: 'text' },
    ]

    return (
      <Layout title="Minimalist Form Page" {...props}>
        <Container>
          <Description>
            A minimalist form interface that shows only one text input at a time,&nbsp;
            transitioning to the next input with a subtle animation.&nbsp;
            It has a progress bar and question counter as well.
          </Description>

          <MinimalistForm questions={questions} />

          <Description>
            Inspired on this&nbsp;
            <a href="https://github.com/codrops/MinimalForm" target="_blank">form</a>&nbsp;
            and implemented in React & styled-components
          </Description>
        </Container>
      </Layout>
    )
  }
}
const Container = styled.div`
  background: ${colors.background};
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
`
const Description = styled.p`
  max-width: 500px;
`
