import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components';

const StyledLink = styled(Link)`
  margin: 0 15px;
  text-transform: uppercase;
  color: var(--text);
  cursor: pointer;
  transition: color 0.2s ease-out;
  text-shadow: var(--textShadow);
  &:hover {
    color: var(--highlight);
  }

`;

export default function navLinks(props) {
    return (
      <>
        <ul style={{ 
          display: "flex",
           position:'relative',
           top:'5%',
          //  right:'2%',
           listStyleType: `none`,
            }}>
             {props.linkData.map(link => (
      <li
        key={link.title +'link'}
        style={{
           padding: `.5rem`,
        }}
      >
        <StyledLink  external='true' to={link.url} >
          {link.title}
        </StyledLink>
      </li>
    ))}
        </ul>
        </>
    )
}
