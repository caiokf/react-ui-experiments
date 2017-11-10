import React, { Component } from 'react'
import styled from 'styled-components'
import Layout from 'views/pages/layout'

import colors from './colors'

import LinkAppearingBrackets from './links/link.appearing.brackets'
import LinkSlideUpUnderline from './links/link.slide.up.underline'
import LinkSlideDownUnderline from './links/link.slide.down.underline'
import LinkRollUp from './links/link.roll.up'
import LinkDoubleLine from './links/link.double.line'
import LinkSubtextDoubleLine from './links/link.subtext.double.line'
import LinkSwitchBorders from './links/link.switch.borders'
import LinkPushOut from './links/link.pushout'
import LinkDots from './links/link.dots'
import LinkScaleDown from './links/link.scale.down'
import LinkShowBorders from './links/link.show.borders'
import LinkTextFill from './links/link.text.fill'
import LinkCircleOver from './links/link.circle.over'

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

          <Section background={colors.background4} foreground={colors.foreground}>
            <nav>
              <LinkDoubleLine href="#">Home</LinkDoubleLine>
              <LinkDoubleLine href="#">Profile</LinkDoubleLine>
              <LinkDoubleLine href="#">Settings</LinkDoubleLine>
              <LinkDoubleLine href="#">Contact</LinkDoubleLine>
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

          <Section background={colors.background5} foreground={colors.foreground}>
            <nav>
              <LinkSubtextDoubleLine href="#" subtext={'visit your dashboard'}>Home</LinkSubtextDoubleLine>
              <LinkSubtextDoubleLine href="#" subtext={'tell us your info'}>Profile</LinkSubtextDoubleLine>
              <LinkSubtextDoubleLine href="#" subtext={'configure your account'}>Settings</LinkSubtextDoubleLine>
              <LinkSubtextDoubleLine href="#" subtext={'talk to us'}>Contact</LinkSubtextDoubleLine>
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

          <Section background={colors.foreground} foreground={colors.foregroundDark}>
            <nav>
              <LinkSwitchBorders foreground={colors.foregroundDark} href="#">Home</LinkSwitchBorders>
              <LinkSwitchBorders foreground={colors.foregroundDark} href="#">Profile</LinkSwitchBorders>
              <LinkSwitchBorders foreground={colors.foregroundDark} href="#">Settings</LinkSwitchBorders>
              <LinkSwitchBorders foreground={colors.foregroundDark} href="#">Contact</LinkSwitchBorders>
            </nav>
          </Section>

          <Section background={colors.background6} foreground={colors.foreground}>
            <nav>
              <LinkPushOut href="#" background={colors.background6}>Home</LinkPushOut>
              <LinkPushOut href="#" background={colors.background6}>Profile</LinkPushOut>
              <LinkPushOut href="#" background={colors.background6}>Settings</LinkPushOut>
              <LinkPushOut href="#" background={colors.background6}>Contact</LinkPushOut>
            </nav>
          </Section>

          <Section background={colors.background7} foreground={colors.foreground}>
            <nav>
              <LinkDots href="#">Home</LinkDots>
              <LinkDots href="#">Profile</LinkDots>
              <LinkDots href="#">Settings</LinkDots>
              <LinkDots href="#">Contact</LinkDots>
            </nav>
          </Section>

          <Section background={colors.background8} foreground={colors.foreground}>
            <nav>
              <LinkScaleDown href="#">Home</LinkScaleDown>
              <LinkScaleDown href="#">Profile</LinkScaleDown>
              <LinkScaleDown href="#">Settings</LinkScaleDown>
              <LinkScaleDown href="#">Contact</LinkScaleDown>
            </nav>
          </Section>

          <Section background={colors.background9} foreground={colors.foreground}>
            <nav>
              <LinkShowBorders href="#">Home</LinkShowBorders>
              <LinkShowBorders href="#">Profile</LinkShowBorders>
              <LinkShowBorders href="#">Settings</LinkShowBorders>
              <LinkShowBorders href="#">Contact</LinkShowBorders>
            </nav>
          </Section>

          <Section background={colors.background} foreground={colors.foreground}>
            <nav>
              <LinkTextFill href="#">Home</LinkTextFill>
              <LinkTextFill href="#">Profile</LinkTextFill>
              <LinkTextFill href="#">Settings</LinkTextFill>
              <LinkTextFill href="#">Contact</LinkTextFill>
            </nav>
          </Section>

          <Section background={colors.background3} foreground={colors.foreground}>
            <nav>
              <LinkCircleOver href="#">Home</LinkCircleOver>
              <LinkCircleOver href="#">Profile</LinkCircleOver>
              <LinkCircleOver href="#">Settings</LinkCircleOver>
              <LinkCircleOver href="#">Contact</LinkCircleOver>
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
