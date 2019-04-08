import React from 'react';
import Layout from '../components/layout'


class Repos extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      repositories: []
    }
  }

  componentDidMount(){
    fetch("/myRepoAPI/hello")
    .then(res => res.json())
    .then(res => console.log(res))
  }

  render() {
    return (
      <Layout>

      </Layout>
    )
  }

}

export default Repos
