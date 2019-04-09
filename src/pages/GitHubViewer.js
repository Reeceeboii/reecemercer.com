import React from 'react'
import Helmet from 'react-helmet'
import HeaderGeneric from '../components/HeaderGeneric'
import Layout from '../components/layout'

import { GoStar, GoRepoForked, GoCode, GoDash } from 'react-icons/go'


import CanvasJS from 'canvasjs'


class GitHubViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      repositories: [],
      languageStats: {}
    }
  }

  componentDidMount(){
    fetch('/myRepoAPI/get-repos-from-db')
    .then(repositories => repositories.json())
    .then(repositories => this.setState({repositories}))

    fetch('/myRepoAPI/language-stats')
    .then(languageStats => languageStats.json())
    .then(languageStats => this.setState({languageStats}))
  }


  render() {
    return (
      <Layout>
        <Helmet title="GitHub Viewer"/>
        <HeaderGeneric headerText="GitHub Viewer"
        paragraphText="A visualiser for all my public repos. Updated directly from GitHub every 10 minutes."/>

        <div id="main">
          <section className="main special">
            <header className="major">
              <h2>Public repositories</h2>
            </header>

            <ul className="features">
              {
                this.state.repositories.map(repo => (
                  <li key={repo._id} style={{background: "#dddddd", borderRadius: "25px"}}>
                    <h3><a href={repo.link}>{repo.name}</a></h3>
                    <GoStar/>{repo.starCount}
                    <GoRepoForked/>{repo.forks}
                    <GoCode/>{repo.language}
                    <p>{repo.desc}</p>
                  </li>
                ))
              }
            </ul>

          </section>
        </div>
      </Layout>
    )

  }
}


export default GitHubViewer
