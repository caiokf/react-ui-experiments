import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Layout from 'views/pages/layout'
import { Button } from 'views/components'

class HomePage extends Component {
  render() {
    return (
      <Layout title="Home Page">
        <Button onClick={() => this.props.history.push('/animated-status-icons')}>
          Animated Status Icons
        </Button>

        <Button onClick={() => this.props.history.push('/minimalist-form')}>
          Minimalist Form
        </Button>

        <Button onClick={() => this.props.history.push('/link-styles')}>
          Link Styles
        </Button>

        <Button onClick={() => this.props.history.push('/water-effects')}>
          Water Effects
        </Button>
      </Layout>
    )
  }
}

const Container = styled.div`
  justify-content: space-evenly;
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`
const mapStateToProps = (state) => ({ })
const mapDispatchToProps = ({ })

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
