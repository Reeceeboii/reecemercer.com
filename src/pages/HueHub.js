import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import HeaderGeneric from '../components/HeaderGeneric'


import Layout from '../components/layout'
import Nav from '../components/Nav'

import HueDiagram from '../assets/images/HueHub Network Diagram.png'

class HueHub extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="HueHub" />
        <HeaderGeneric headerText="HueHub" paragraphText="A program to control Philips Hue smart bulbs"/>
        <h3 style={{textAlign: `center`}}>GitHub repo - <a href="https://github.com/Reeceeboii/HueHub" target="_blank">HueHub</a></h3>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={HueDiagram} alt="" /></span>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HueHub
