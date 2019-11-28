import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import HeaderGeneric from '../components/HeaderGeneric';
import Layout from '../components/layout';
import APIDev from '../misc-modules/APIDev';
import APIProd from '../misc-modules/APIProd';
import { GoStar, GoRepoForked, GoCode } from 'react-icons/go';

import ReactChartkick, { PieChart } from 'react-chartkick';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart)

class GitHubViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      repositories: [], // array of repositories
      languageStats: {} // object of {language: occurence} for all of this.state.repositories
    }
  }

  // fetch data on component mount
  componentDidMount(){
    // fetch repositories and related information
    const APIString = process.env.NODE_ENV === 'production' ? APIProd + "myRepoAPI": APIDev;
    fetch(`${APIString}/get-repos-from-db`)
    .then(repositories => repositories.json())
    .then(repositories => this.setState({repositories}))

    // fetch the number of times each language occurs in my public repositories
    fetch(`${APIString}/language-stats`)
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
                    <h3><a href={repo.link} target="_blank" rel="noopener noreferrer">{repo.name}</a></h3>
                    <GoStar/>{repo.starCount}
                    <GoRepoForked/>{repo.forks}
                    <GoCode/>{repo.language}
                    <p>{repo.desc}</p>
                  </li>
                ))
              }
            </ul>

            <header className="major">
              <h2>Statistics</h2>
            </header>
            <h2>Language distribution over public repositories</h2>
            <PieChart data={this.state.languageStats}/>

            <Link to="/" className="button">Return home</Link>
          </section>

        </div>
      </Layout>
    )

  }
}


export default GitHubViewer
