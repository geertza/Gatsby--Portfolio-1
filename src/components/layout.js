
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./nav/navbar"
import "../style/style.css"

const Layout = ({ children }) => {
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
    }
  `)
  

  return (
    <>
      <Navbar data={data} />
      {console.log('layout data',data)}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main data={data}>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
        
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
