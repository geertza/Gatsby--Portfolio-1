import React from "react"
import Intro from "../components/intro/intro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/Projects/project"
import SoftwareSkills from "../components/softwareSkills/SoftwareSkill"
import { useStaticQuery, graphql } from "gatsby"
import Skills from "../components/skills/skills"
import Contact from "../components/contact/contact"


 // Change navbar content according to device demensions
 function changeMobile() {
  window.matchMedia('(max-width: 37.5em)').matches
  ? this.setState({isMobile:true})
  : this.setState({isMobile:false})
};


export const IndexPage = () => {
  const data = useStaticQuery(graphql`
query SiteQuery {
site {
  siteMetadata {
    title
  }
}
desk:file(relativePath: { eq: "desk.png" }) {
  childImageSharp {
    fluid(grayscale: false, fit:CONTAIN) {
      ...GatsbyImageSharpFluid
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
}
}
`)
const [isMobile, setIsMobile] = false;
const changeMobile = () => {
  window.matchMedia('(max-width: 37.5em)').matches
  ? setIsMobile(true)
  : setIsMobile(false)
};
  return (
      <Layout data={data} isMobile={isMobile} >
          <SEO title="Home" />
          <Intro />
          {/* {skills background} */}
          <SoftwareSkills   />
          <Projects data={data}/>
          <Skills desk={data.desk} />
          <Contact />
      </Layout> 
  )
}

export default IndexPage