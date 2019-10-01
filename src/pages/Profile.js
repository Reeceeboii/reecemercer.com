import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import circuit from '../assets/images/circuit.jpg'

class Profile extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Personal profile" />
        <HeaderGeneric headerText="Personal profile" paragraphText="Here's a little more background about me and what I do"/>
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={circuit} alt="" /></span>
            <h1><u>Education</u></h1>
            <h2>For more in depth grade/education information, <Link to="/#contact">contact me</Link> for a copy of my CV</h2>
            <hr/>

            <h3><b>2018 - 2023 - <a href="https://www.city.ac.uk/">City, University of London</a> - {` `}
            <a href="https://www.city.ac.uk/study/courses/undergraduate/computer-science-cyber-security-msci">
            MSci Computer Science with Cyber Security</a></b></h3>
            <ul className="four-features">
                <li>
                    <h4><u>Year 1 - overall 1st</u></h4>
                    <p><b>1st:</b> IN1002 - Introduction to Algorithms</p>
                    <p><b>1st:</b> IN1004 - Mathematics for Computing</p>
                    <p><b>1st:</b> IN1006 - Systems Architecture</p>
                    <p><b>1st:</b> IN1007 - Programming in Java</p>
                    <p><b>1st:</b> IN1010 - Business Systems</p>
                    <p><b>1st:</b> IN1011 - Operating Systems</p>
                </li>
                <li>
                    <h4><u>Year 2 - in progress</u></h4>
                    <p><b>TBC:</b> IN2002 - Data Structures and Algorithms</p>
                    <p><b>TBC:</b> IN2009 - Language Processors</p>
                    <p><b>TBC:</b> IN2011 - Computer Networks</p>
                    <p><b>TBC:</b> IN2013 - Object-Oriented Analysis and Design</p>
                    <p><b>TBC:</b> IN2015 - Professional Development in IT</p>
                    <p><b>TBC:</b> IN2018 - Team Project</p>
                    <p><b>TBC:</b> IN2029 - Programming in C++</p>
                </li>
                <li>
                    <h4><u>Year 3</u></h4>
                    <p>Year 3 will be spent on a work placement gaining industry experience.</p>
                </li>
                <li>
                    <h4><u>Year 4 - n/a</u></h4>
                    <p>Modules yet to be confirmed</p>
                </li>
            </ul>

            <hr/>

            <h3><b>2016 - 2018 - <a href="https://www.teddingtonschool.org/">Teddington Sixth form</a> - A-Levels</b></h3>
            <ul>
                <li>
                    <h4><u>Computer Science</u> - Achieved A level qualification with a grade A-C.</h4>
                    <p>Programming and theory exams along with a substantial piece of
                    coursework. I developed an Epidemiological Simulator to aid the teaching of disease spread
                    and immunisation distribution concepts to younger
                    students. I was also an Elite level Bebras participant for 2017 and 2018.</p>
                </li>
                <li>
                    <h4><u>Biology</u> - Achieved A level qualification with a grade A-C.</h4>
                    <p>Theory exams and independent research tasks. I also took an interest in
                    concepts outside of the exam specification and partook in the British Biology
                    Olympiad in 2017.</p>

                </li>
                <li>
                    <h4><u>Psychology</u> - Achieved A level qualification with a grade A-C.</h4>
                    <p>Modules of interest included Biopsychology, Schizophrenia, Psychopathology and Aggression.
                    I also carried out an independent investigation into dream patterns using surveys, and wrote Python scripts
                    to automatically analyse results and report findings.</p>

                </li>


            </ul>

            <hr/>

            <h3><b>2014 - 2016 - <a href="https://www.hamptonhigh.org.uk/">HCC/Hampton Academy</a> (now Hampton High) - GCSEs</b></h3>
            <ul>
                <li>
                    <h4><u>9 GCSE's graded A* to C</u></h4>
                    <p>Inlcuding Computer Science, Maths, English and triple science.</p>
                </li>
                <li>
                    <h4><u>English Baccalaureate</u></h4>
                    <p>A* to C grades in English, Maths, Science, History and a modern foreign language (French).</p>
                </li>
            </ul>


            <h1><u>Technical skills</u></h1>

            <hr/>

            <ul>
                <li>
                    <h4><u>Programming languages</u></h4>
                    <p>I'm Fluent in Python, Java and C++, and am proficient in JavaScript (using ReactJS and NodeJS). I have had experience
                    using Kotlin.</p>
                </li>
                <li>
                    <h4><u>Development tools</u></h4>
                    <p>Experienced using VCS workflows - specifically Git and Github. I have used continuous integration tools such as
                    TravisCI as well as branch deploys to test new additions to codebases before introducing them to production. I have used
                    static site generators such as GatsbyJS (used on this site) to generate fast and optimised React sites.</p>
                </li>
                <li>
                    <h4><u>Cloud services</u></h4>
                    <p>I have used cloud computing services/PaaS's such as AWS EC2 instances, Digital Ocean droplets and Heroku Dynos to host
                    web apps and backend services. I use Netlify to host multiple React frontends for both university coursework projects
                    as well as my personal website (this!) and <a href="https://www.photography.reecemercer.dev">photography website.</a></p>

                    <p>I have configured AWS S3 buckets to store and serve large amounts of media and then wrapped a backend API around them
                    to serve publicly accessible URLs to a frontend, allowing the site to be populated with dynamically served content.</p>
                </li>
                <li>
                    <h4><u>Databases</u></h4>
                    <p>As well as using PaaS models for hosting frontends and backends, I have used DBaaS models such as MongoDB Atlas to host
                    Mongo instances, and then accessed these via NodeJS servers to provide data persistence for dynamic web apps.</p>
                </li>
            </ul>

            <h1><u>Extra-curricular commitments and positions</u></h1>
            <hr/>

            <ul>
                <li>
                    <h4><u>Society committee positions</u></h4>
                    <p>I am the acting Communications Officer for the <a href="https://www.citystudents.co.uk/getinvolved/society/28306/">City University Programming Society. </a>
                    I manage email communications and social media accounts, as well as helping be the public face of the society 
                    during freshers' and STEM fairs. I will also be teaching Java programming workshops during my second year to new and existing programmers alike.</p>
                </li>
                <li>
                    <h4><u>Student mentor scheme</u></h4>
                    <p>Within City's student buddy scheme, I hold mentor and leader positions. That means I act as a mentor for first year students during their transition
                    period from sixth form/college, but also help organise events, publicly represent the scheme and partake in recruitment.</p>
                </li>
            </ul>

            <ul className="actions">
              <li><Link to="/" className="button">Return home</Link></li>
            </ul>

          </section>
        </div>
      </Layout>
    )
  }
}

export default Profile
