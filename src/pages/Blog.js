import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import HeaderGeneric from '../components/HeaderGeneric'

import Layout from '../components/layout'


const posts = [
  {
    path: "/new-blog",
    title: "New Blog!",
    date: "19/02/19"
  },
  {
    path: "/5-reasons-why-i-enjoy-computer-science",
    title: "5 reasons why I enjoy Computer Science",
    date: "20/02/19"
  },
  {
    path: "/business-systems-coursework",
    title: "Business systems coursework",
    date: "05/04/19"
  },
  {
    path: "/end-of-year-1",
    title: "End of year 1",
    date: "04/06/19"
  },
  {
    path: "/new-photography-website",
    title: "Launching my new photography website!",
    date: "05/07/19"
  }
]

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
              {
                posts.map(post => (
                  <li>
                    <h2><a href={post.path}>{post.title}</a></h2>
                    <h2>{post.date}</h2>
                  </li>
                ))
              }
            </ul>
            <Link to="/" className="button">Return home</Link>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Blog
