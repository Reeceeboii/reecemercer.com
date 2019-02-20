import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'

import me from '../assets/images/me.jpg'
import bulb from '../assets/images/bulb.png'
import threeD from '../assets/images/3d.png'
import security from '../assets/images/security.png'


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Reece Mercer" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Welcome</h2>
                </header>
                <p>I am currently a full time first year student at City, University of London, studying Computer Science with Cyber Security.</p>
                <p>I am also an avid programmer, and have current interests in encryption algorithms and the control of IoT devices via REST API's.</p>
                <ul className="actions">
                  <li><Link to="/about" className="button">Learn some more about me</Link></li>
                </ul>
              </div>
              <span className="image"><img src={me} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Projects</h2>
            </header>
            <ul className="features">
              <li>
                <span className="image"><img src={bulb} alt="" /></span>
                <h3>HueHub</h3>
                <p>Client software for interfacing with the Philips Hue API and controlling smart bulbs.</p>
                <Link to="/HueHub" className="button project">Explore</Link>
              </li>
              <li>
                <span className="image"><img src={threeD} alt="" /></span>
                <h3>3D renderer</h3>
                <p>A 3D model renderer, built using OpenGL. Vertex buffer objects, vertex arrays and basic shaders.</p>
                <Link to="/3DRenderer" className="button project">Explore</Link>
              </li>
              <li>
                <span clasName="image"><img src={security} alt="" /></span>
                <h3>RSA</h3>
                <p>Fully functional implementation of the RSA asymmetric cryptography system. Keygen, encryption and decryption.</p>
                <Link to="/RSA" className="button project">Explore</Link>
              </li>
            </ul>

            <h2>For more things I've done, and to view the full source code for the above projects, visit my <a href="https://github.com/Reeceeboii" target="_blank" rel="noopener noreferrer">GitHub</a></h2>
          </section>

          <section id="second" className="main special">
            <header className="major">
            <h2>Blog</h2>
            <br/>
            <p>Reece's Rambles, my corner of the web for talking about tech, studies and anything else I'm up to</p>
            <Link to="/Blog" className="button project">Visit my blog!</Link>
            </header>
          </section>

          <section id="third" className="main special">
            <header className="major">
              <h2>What I'm studying</h2>
              <h3><b>Here's a small list of the modules I'm studying this year</b></h3>
            </header>


            <h3>Programming in Java</h3>
            <h3>Discrete mathematics</h3>
            <h3>Business systems (web development & databases)</h3>
            <h3>Systems architecture</h3>
            <h3>Algorithms</h3>
            <h3>Operating systems</h3>

          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Contact and other info</h2>
              <p>You can email me at <a href="mailto:reecemercer@outlook.com">reecemercer@outlook.com</a></p>
              <p>Or view my <a href="https://github.com/Reeceeboii" target="_blank" rel="noopener noreferrer">GitHub</a> to see what else I do!</p>
            </header>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
