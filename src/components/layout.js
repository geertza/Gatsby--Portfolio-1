
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./nav/navbar"
import "../style/style.css"
import "../style/fontAwesome/css/fontAwesome.css"

const Layout = ({ children,data }) => {
  return (
    <>
      <Navbar data={data} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: '100vw',
        }}
      >
        <main >{children}</main>
       
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
