import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import HeaderGeneric from '../components/HeaderGeneric'


import Layout from '../components/layout'
import Nav from '../components/Nav'

import HueDiagram from '../assets/images/HueHub Network Diagram.png'

import Hue1 from '../assets/images/HueHub 1.png'
import Hue2 from '../assets/images/HueHub 2.png'
import Hue3 from '../assets/images/HueHub 3.png'
import Hue4 from '../assets/images/HueHub 4.png'
import Hue5 from '../assets/images/HueHub 5.png'


import HueEntryScreen from '../assets/images/HueEntryScreen0.png'
import HueEntryScreen1 from '../assets/images/HueEntryScreen1.png'
import HueEntryScreen2 from '../assets/images/HueEntryScreen2.png'



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
            <h2><b>About HueHub</b></h2>
            <p>Fairly recently I wanted to branch out from making purely local programs, and try and make something that involved some degree of networking.
            I figured that although I could control my lights from my phone, I had no way of doing it from my computer. Now the official program called HueSync
            does already exist, and probably looks a lot cleaner than mine does, but I wanted to understand how small snippets of data are transferred between
            devices, and HueHub was the solution to that. I learnt both about API authentication, as well as how JSON is used to streamline HTTP requests when
            sending or receiving data.</p>

            <h2><b>Some screenshots</b></h2>
            <span className="image"><img src={HueEntryScreen} alt=""/></span>
            <p style={{textAlign: `left`}}>The first screen a new user sees</p>

            <span className="image"><img src={HueEntryScreen1} alt=""/></span>
            <p style={{textAlign: `left`}}>If the user attempts a connection without pressing the auth button on the bridge</p>

            <span className="image"><img src={HueEntryScreen2} alt=""/></span>
            <p style={{textAlign: `left`}}>Successful authentication</p>

            <span className="image"><img src={Hue1} alt=""/></span>
            <p style={{textAlign: `left`}}>Main screen with light selection and control options</p>

            <span className="image"><img src={Hue2} alt=""/></span>
            <p style={{textAlign: `left`}}>Brightness slider for fine tuning of light brightness.</p>

            <span className="image"><img src={Hue3} alt=""/></span>
            <p style={{textAlign: `left`}}>Simple on/off button</p>

            <span className="image"><img src={Hue4} alt=""/></span>
            <span className="image"><img src={Hue5} alt=""/></span>
            <p style={{textAlign: `left`}}>Menu options</p>


            <ul className="actions">
              <li><Link to="/" className="button">Return home</Link></li>
            </ul>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HueHub
