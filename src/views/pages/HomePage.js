import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Layout from 'views/pages/Layout'

class HomePage extends Component {
  render() {
    return (
      <Layout title="Home Page">
        Demo App
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
