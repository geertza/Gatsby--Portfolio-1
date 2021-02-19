import React, { Component } from 'react'
import { Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
export default class header extends Component {
  
  render() {
    const linkData = this.props.data.graphcms.navbarLinks
    const bg=this.props.data.navBG.childImageSharp.fluid
    return (
      <BackgroundImage 
      fluid={bg}
      style={{
        backgroundColor:'black',
        position:'fixed',
        width:'100%',
        top: 0 ,
         overflow:'hidden',
         backgroundRepeat: 'repeat-x',
         backgroundSize:'50% 180%',
         height:'8vh',
         }}>
        
        <ul style={{ display: "flex", float: 'right', }}>
    {linkData.map(link => (
      <li
        key={link.title +'link'}
        style={{
          listStyleType: `none`,
          padding: `.5rem`,
        }}
      >
        <Link style={{ 
          color: `blue`,
          textShadow:'.3px .3px grey',
          backgroundColor:'white',
          border:'solid 2px',
          borderRadius:'15px',
          borderColor:'grey',
          padding: '3px',
          backgroundImage:'none'
          }} external='true' to={link.url}>
          {link.title}
        </Link>
      </li>
    ))}
    
  </ul>
      </BackgroundImage>
    )
  }
}
