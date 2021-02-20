import React from 'react'
import { Link } from "gatsby"
export default function navLinks(props) {
    return (
        <ul style={{ display: "flex", float: 'right', }}>
             {props.linkData.map(link => (
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
    )
}
