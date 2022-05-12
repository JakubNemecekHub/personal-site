import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <p>Just fooling around with another futile enterprise.</p>
      <p>Sooner, rather than later, I will need to add a pagination system to this here site.</p>
      <h2>My blog posts</h2>
      { /* Map all blog post files and show them. Should make a component for them.*/ }
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h3>{node.frontmatter.title}</h3>
            <p>Posted: {node.frontmatter.date}</p>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`

export default BlogPage