import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import HeaderGeneric from '../components/HeaderGeneric'

import Layout from '../components/layout'


class Blog extends React.Component {
  render () {
    return (
      <Layout>
        <Helmet title="Blog"/>
        <HeaderGeneric headerText="Reece's Rambles" paragraphText="Slightly interesting content from someone who spends too long sat at his computer"/>

        <div id="main">
          <section className="main special">
            <header className="major">
              <h2>Posts</h2>
            </header>

            <ul className="features">
              <li>
                <h2><a href="/new-blog">New Blog!</a></h2>
                <h2>20/02/19</h2>
              </li>
              <li>
                <h2><a href="/5-reasons-why-i-enjoy-computer-science">5 reasons why I enjoy Computer Science</a></h2>
                <h2>20/02/19</h2>
              </li>
              <li>
                <h2><a href="/business-systems-coursework">Business systems coursework</a></h2>
                <h2>05/04/19</h2>
              </li>
            </ul>

            <Link to="/" className="button">Return home</Link>
          </section>
        </div>


      </Layout>
    )
  }
}

export default Blog
