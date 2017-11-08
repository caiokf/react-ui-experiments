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
      </Layout>
    )
  }
}

const Container = styled.div`
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`
const mapStateToProps = (state) => ({ })
const mapDispatchToProps = ({ })

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
