import React from "react"
import Intro from "../components/intro/intro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/Projects/slick"
import { useStaticQuery, graphql } from "gatsby"

export const IndexPage = () => {
  const data = useStaticQuery(graphql`
query SiteQuery {
site {
  siteMetadata {
    title
  }
}
introBG: file(relativePath: { eq: "office.jpg" }) {
  childImageSharp {
    fluid(maxWidth: 300) {
      ...GatsbyImageSharpFluid
    }
  }
}
navBG:file(relativePath: { eq: "cloud3.png" }) {
  childImageSharp {
    fluid(grayscale: false, fit:CONTAIN) {
      ...GatsbyImageSharpFluid
    }
  }
}

  allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "Tv"}}) {
    edges {
      node {
        name
        childrenImageSharp {
          fluid{
						...GatsbyImageSharpFluid
          }
        }
      }
    }
    nodes {
      children {
        id
      }
    }
  }
}
`)
  return (
      <Layout data={data} >
        {console.log('index'.data)}
          <SEO title="Home" />
          <Intro />
          <Projects data={data.allFile.edges}/>
      </Layout> 
  )
}

export default IndexPage