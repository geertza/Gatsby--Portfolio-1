import React from "react"
import Intro from "../components/intro/intro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/Projects/slick"
import SoftwareSkills from "../components/softwareSkills/SoftwareSkill"
import { useStaticQuery, graphql } from "gatsby"
// import Skills from "../components/softwareSkills/skills"
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
wood:file(relativePath: { eq: "cloud3.png" }) {
  childImageSharp {
    fluid(grayscale: false, fit:CONTAIN) {
      ...GatsbyImageSharpFluid
    }
  }
}
skills:allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "skillsIcons"}}) {
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
tv:allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "Tv"}}) {
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

          <SEO title="Home" />
          <Intro />
          <Projects data={data}/>
          <SoftwareSkills data={data}  >
            {/* <Skills  /> */}
          </SoftwareSkills>
      </Layout> 
  )
}

export default IndexPage