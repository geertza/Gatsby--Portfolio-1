import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
const IndexPage = ({ data }) => (
  <Layout>
    <h1>{console.log('test2',data)}</h1>
  </Layout>
)
export default IndexPage
