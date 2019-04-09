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
import github from '../assets/images/github.png'


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  };

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  };

  render() {
    const checkEmoji = <span role="img" aria-label="Check">✔️</span>;
    const bookEmoji = <span role="img" aria-label="Book">📚</span>;

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
                  <h2>Hey, I'm Reece!</h2>
                </header>
                <p>I am currently a full time first year student at City, University of London, studying Computer Science with Cyber Security.</p>
                <p>I am also an avid programmer, scroll down to view some of my projects and see the kind of things I'm interested in!</p>
                <ul className="actions">
                  <li><Link to="/about" className="button">Learn some more about me</Link></li>
                </ul>
              </div>
              <span className="image"><img src={me} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Featured projects</h2>
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
                <span className="image"><img src={security} alt="" /></span>
                <h3>RSA</h3>
                <p>Fully functional implementation of the RSA asymmetric cryptography system. Keygen, encryption and decryption.</p>
                <Link to="/RSA" className="button project">Explore</Link>
              </li>
            </ul>
            <header className="major">
              <h2>GitHub viewer</h2>
            </header>
            <ul className="features">
              <li>
                <span className="image"><img src={github} alt="" /></span>
                <h3>Live updated summary of my GitHub - repos, descriptions, stars, forks, language use statistics.</h3>
                <h3><b>All in one place</b></h3>
                <Link to="/GitHubViewer" className="button project">Visit now!</Link>
              </li>
            </ul>

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
              <h3>Completed - {checkEmoji} | In progress - {bookEmoji}</h3>
              <hr/>
            </header>


            <h3>Programming in Java {bookEmoji}</h3>
            <h3>Discrete mathematics {checkEmoji}</h3>
            <h3>Business systems (web development & databases) {checkEmoji}</h3>
            <h3>Systems architecture {checkEmoji}</h3>
            <h3>Algorithms {bookEmoji}</h3>
            <h3>Operating systems {bookEmoji}</h3>

          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Contact and other info</h2>
              <h3>You can email me at <a href="mailto:reecemercer@outlook.com">reecemercer@outlook.com</a>,</h3>
              <h3>or go to my <a href="https://www.linkedin.com/in/reece-mercer/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h3>
              <h3>or view my <a href="https://github.com/Reeceeboii" target="_blank" rel="noopener noreferrer">GitHub</a> to see what else I do!</h3>
            </header>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
