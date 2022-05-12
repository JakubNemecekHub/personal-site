import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'
import MyListContainer from '../components/my-list-container'

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <p>Multiple, but very shallow.</p>

      <MyListContainer data={data.allSkillsJson.edges} />

    </Layout>
  )
}

export const query = graphql`
  query MySkillsQuery {
    allSkillsJson {
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