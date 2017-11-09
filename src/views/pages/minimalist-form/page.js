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
          <MinimalistForm questions={questions} />
        </Container>
      </Layout>
    )
  }
}
const Container = styled.div`
  background: ${colors.background};
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
`
