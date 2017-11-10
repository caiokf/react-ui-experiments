import React, { Component } from 'react'
import styled from 'styled-components'
import Layout from 'views/pages/layout'

import colors from './colors'

import LinkAppearingBrackets from './links/link.appearing.brackets'
import LinkSlideUpUnderline from './links/link.slide.up.underline'
import LinkSlideDownUnderline from './links/link.slide.down.underline'
import LinkRollUp from './links/link.roll.up'
import LinkDoubleLine from './links/link.double.line'

export default class LinkStylesPage extends Component {
  render() {
    const props = {
      foreground: colors.foreground,
      background: colors.background,
    }

    return (
      <Layout title="Link Styles" {...props}>
        <Container>
          <Section background={colors.background} foreground={colors.foreground}>
            <nav>
              <LinkAppearingBrackets href="#">Home</LinkAppearingBrackets>
              <LinkAppearingBrackets href="#">Profile</LinkAppearingBrackets>
              <LinkAppearingBrackets href="#">Settings</LinkAppearingBrackets>
              <LinkAppearingBrackets href="#">Contact</LinkAppearingBrackets>
            </nav>
          </Section>

          <Section background={colors.background2} foreground={colors.foreground}>
            <nav>
              <LinkSlideUpUnderline href="#">Home</LinkSlideUpUnderline>
              <LinkSlideUpUnderline href="#">Profile</LinkSlideUpUnderline>
              <LinkSlideUpUnderline href="#">Settings</LinkSlideUpUnderline>
              <LinkSlideUpUnderline href="#">Contact</LinkSlideUpUnderline>
            </nav>
          </Section>

          <Section background={colors.background3} foreground={colors.foreground}>
            <nav>
              <LinkSlideDownUnderline href="#">Home</LinkSlideDownUnderline>
              <LinkSlideDownUnderline href="#">Profile</LinkSlideDownUnderline>
              <LinkSlideDownUnderline href="#">Settings</LinkSlideDownUnderline>
              <LinkSlideDownUnderline href="#">Contact</LinkSlideDownUnderline>
            </nav>
          </Section>

          <Section background={colors.background} foreground={colors.foreground}>
            <nav>
              <LinkRollUp href="#">Home</LinkRollUp>
              <LinkRollUp href="#">Profile</LinkRollUp>
              <LinkRollUp href="#">Settings</LinkRollUp>
              <LinkRollUp href="#">Contact</LinkRollUp>
            </nav>
          </Section>

          <Section background={colors.background4} foreground={colors.foreground}>
            <nav>
              <LinkDoubleLine href="#">Home</LinkDoubleLine>
              <LinkDoubleLine href="#">Profile</LinkDoubleLine>
              <LinkDoubleLine href="#">Settings</LinkDoubleLine>
              <LinkDoubleLine href="#">Contact</LinkDoubleLine>
            </nav>
          </Section>

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
const Section = styled.section`
  background: ${props => props.background};
  color: ${props => props.foreground};
  padding: 80px 40px;
`
