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
