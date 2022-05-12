// This site, Juli music player, my Point and click game

import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import MyListContainer from '../components/my-list-container'

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <p>I don't believe I have ever finished one tiny project.</p>
      <p>Try to change that. One day...</p>
      <p>I the meantime I present ot you the projects, that  need finishing</p>
      <MyListContainer data={data.allProjectsJson.edges} />
    </Layout>
  )
}

export const query = graphql`
  query MyProjectsQuery {
    allProjectsJson {
      edges {
        node {
          title
          values
        }
      }
    }
  }
`

export default AboutPage