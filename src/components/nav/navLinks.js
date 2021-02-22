import React from 'react'
import { Link } from "gatsby"
import DarkMode from './dark-mode'
export default function navLinks(props) {
    return (
      <>
        <ul style={{ 
          display: "flex",
           position:'relative',
           top:'-15%',
           right:'2%',
           listStyleType: `none`,
            }}>
             {props.linkData.map(link => (
      <li
        key={link.title +'link'}
        style={{
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
    {/* <li>
     <DarkMode />
      </li> */}
        </ul>
        </>
    )
}
