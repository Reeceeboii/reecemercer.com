import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import circuit from '../assets/images/circuit.png'

class About extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="About me" />
        <HeaderGeneric headerText="About me" paragraphText="Here's a little more background about me and my interests"/>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={circuit} alt="" /></span>
            <h1><b><u>Education</u></b></h1>
            <h2>2006 - Primary school - year 2</h2>
            <p>I started a computer club, aged 6, called <a href="https://www.technokids.com/" target = "_blank" rel="noopener noreferrer">Technokids</a> as an extra curricular activity. I'd never really had much of an interest in technology before, but
            instantly, I developed a love for computers and how they allowed me to do things such as make little musical loops or learn how many words I could type a minute etc...
             Looking back, these are rather trivial things, but at the time I didn't realise that that fascination had kick started a love for technology that would still be going strong many many years later.</p>

            <h2>2011 - 2016 - Secondary school</h2>
            <p>I took to ICT like a duck to water in my first year of secondary school, and was a member of the gifted and talented group, where I was invited on a trip to partake in a computer animation workshop.
            When the time came to choose GCSE subjects, computer science was a no brainer, and this was my first exposure to programming. I picked up my first language - Python - which is still my strongest language today.</p>

            <h2>2016 - 2018 - Sixth form</h2>
            <p>Sixth form came with a big increase to my knowledge of both computer science theory, and practical application. It was this point that I started working on small projects in my own time, which was when I discovered
            GUI programming in the form of the <a href="https://docs.python.org/2/library/tkinter.html" target="_blank" rel="noopener noreferrer">TkInter</a> library for Python. My end of year project was an epidemiological simulation, visualised with various
            customisable parameters. It was designed to be used as a teaching tool within a classroom environment to demonstrate to biology students how things such as the number of land borders a country has, its ambient climate
            or the population numbers impacted the spread of a disease over 200+ countries. It implemented some well known algorithms such as a breadth first search in order simulate the propagation of a disease outwards from the starting
            country, using the data about which countries share land borders, and which countries aren't and are already infected.</p>

            <h2>2018 - present - University</h2>
            <p>I started at City, University of London in late 2018. And the past few months have been some of the most learning-filled months I have ever experienced. I have picked up fairly broad amounts of knowledge in 2 other languages,
            Java and C++. I have also broadened the scope of my own projects, such as creating a basic game engine via OpenGL, which is able to load 3D models into memory (using vertex buffer arrays and vertex array objects), and render them
            on screen. I also followed a tutorial on implementing basic vertex and fragment shaders using GLSL (a programming language that executes on the GPU, rather than the CPU) which was a first for me. I also started implementing networking
            into my programs. I created a piece of software I call 'HueHub', a GUI driven client program, capable of both automatic authentication with the Philips Hue smart bulb API, and various controls over any connected smart bulbs such as brightness sliders
            and on/off switches. More in depth explanations of these tutorials can be found on my projects page.</p>

            <ul className="actions">
              <li><Link to="/" className="button">Return home</Link></li>
            </ul>

          </section>
        </div>
      </Layout>
    )
  }
}

export default About
