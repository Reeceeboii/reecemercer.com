import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'


const NotFoundPage = () => (
  <Layout>
    <h1>404 :(</h1>
    <p>There's nothing here just yet</p>
    <Link to="/" className="button">Go back</Link>
  </Layout>
)

export default NotFoundPage
