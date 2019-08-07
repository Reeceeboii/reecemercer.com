import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'

import me from '../assets/images/me.jpg'
import gallery from '../assets/images/gallery.svg'
import threeD from '../assets/images/cube.svg'
import security from '../assets/images/security.svg'
import github from '../assets/images/github.svg'


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
    const graduationEmoji = <span role="img" aria-label="Graduation Cap">🎓</span>;
    const bookEmoji = <span role="img" aria-label="Book">📚</span>;
    const rocketEmoji = <span role="img" aria-label="Rocket">🚀</span>;
    const lockedEmoji = <span role="img" aria-label="Lock">🔒</span>;

    return (
      <Layout>
        <Helmet title="Reece Mercer"/>

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
                <span className="image"><img width="128px" src={gallery} alt="" /></span>
                <h3>Photography Website</h3>
                <p>ReactJS frontend with a NodeJS backend - using an AWS S3 bucket for media storage</p>
                <Link to="/Photography" className="button project">Explore</Link>
              </li>
              <li>
                <span className="image"><img width="128px" src={threeD} alt="" /></span>
                <h3>3D renderer</h3>
                <p>A 3D model renderer, built using OpenGL. Vertex buffer objects, vertex arrays and basic shaders.</p>
                <Link to="/3DRenderer" className="button project">Explore</Link>
              </li>
              <li>
                <span className="image"><img width="128px" src={security} alt="" /></span>
                <h3>RSA</h3>
                <p>Fully functional implementation of the RSA asymmetric cryptography system. Keygen, encryption and decryption.</p>
                <Link to="/RSA" className="button project">Explore</Link>
              </li>
            </ul>
            <hr/>
            <header className="major">
              <h2>GitHub viewer</h2>

            </header>
            <ul className="features">
              <li>
                <span className="image"><img width="128px" src={github} alt="" /></span>
                <h3>Live updated summary of my GitHub - repos, descriptions, stars, forks, language use statistics.</h3>
                <h3><b>All in one place.</b></h3>
                <Link to="/GitHubViewer" className="button">Visit now {rocketEmoji}</Link>
              </li>
            </ul>

          </section>

          <section id="second" className="main special">
            <header className="major">
            <h2>Blog</h2>
            <br/>
            <p>Reece's Rambles, my corner of the web for talking about tech, studies and anything else I'm up to</p>
            <Link to="/Blog" className="button">Visit my blog</Link>
            </header>
          </section>


          <section id="third" className="main special">
            <header className="major">
              <h2>What I'm studying</h2>
              <h3><b>Here's a small list of the modules I have either completed
              or am soon going to be studying</b></h3>
              <h3>Completed - {graduationEmoji} | In progress - {bookEmoji} | Soon to be studying - {lockedEmoji}</h3>
              <hr/>
            </header>

            <ul className="features">
              <li>
                <h2><b>Year 1 - 1st Overall</b></h2>
                <h3>Programming in Java {graduationEmoji} - 1st</h3>
                <h3>Discrete mathematics {graduationEmoji} - 1st</h3>
                <h3>Business systems (web development & databases) {graduationEmoji} - 1st</h3>
                <h3>Systems architecture {graduationEmoji} - 1st</h3>
                <h3>Algorithms {graduationEmoji} - 1st</h3>
                <h3>Operating systems {graduationEmoji} - 1st</h3>
              </li>

              <li>
                <h2><b>Year 2</b></h2>
                <h3>Data structures and algorithms {lockedEmoji}</h3>
                <h3>Programming in C++ {lockedEmoji}</h3>
                <h3>Language processors {lockedEmoji}</h3>
                <h3>Computer networks {lockedEmoji}</h3>
                <h3>Object orientated analysis and design {lockedEmoji}</h3>
                <h3>Professional development in IT {lockedEmoji}</h3>
                <h3>Team project {lockedEmoji}</h3>
              </li>
            </ul>
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
