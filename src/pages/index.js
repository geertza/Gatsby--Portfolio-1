import React from "react"
import Intro from "../components/intro/intro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/Projects/project"
import SoftwareSkills from "../components/softwareSkills/SoftwareSkill"
import { useStaticQuery, graphql } from "gatsby"
import Skills from "../components/skills/skills"
import Contact from "../components/contact/contact"




export const IndexPage = () => {
  const schema =
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Andys Web Design",
    "image": "https://drive.google.com/file/d/1B7ELVtU16yzQZna9WiZeNkDA_g2BDO7h/view?usp=sharing",
    "@id": "",
    "url": "https://www.andyswebdesign.net/",
    "telephone": "4065391218",
    "description": "smart passionate techie looking to start his career, certified i full stack ,versed in serverless wordpress shopify gatsby front End front-end back end back-end",
    "title": "Wordpress Shopify Full-Stack Web Developer Entry level Junior",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3804 Mesa",
      "addressLocality": "billings",
      "addressRegion": "MT",
      "postalCode": "59102",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.801528,
      "longitude": -108.611545
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "06:00",
      "closes": "20:00"
    } 
  }
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

  return (
      <Layout data={data} >
          <SEO title="Home" scemaMarkup={schema} />
          <Intro />
          <Projects data={data}/>
          <Skills desk={data.desk} />
          <Contact />
           {/* {skills background} */}
          <SoftwareSkills   />
      </Layout> 
  )
}

export default IndexPage