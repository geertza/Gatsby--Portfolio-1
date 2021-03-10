
import React from "react"
import PropTypes from "prop-types"
import Navbar from "./nav/navbar"
import "../style/style.css"
const Layout = ({ children,data,isMobile }) => {
  return (
    <>
     
      <Navbar data={data} isMobile={isMobile} />
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
