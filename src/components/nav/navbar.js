import React, { Component } from 'react'

import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components';
import { animated, useSpring, config } from 'react-spring';
import Navlinks from "./navLinks"


export default class navbar extends Component {
  constructor(props) {
    super();
    this.state = {
      linkData: props.data.graphcms.navbarLinks,
      bg: props.data.navBG.childImageSharp.fluid
    
    };
  }
  
  render() {
    const StyledHeader = styled(animated.header)`
      position: fixed;
      width: 100%;
      max-width: 100vw;
      top: 0;
      left: 0;
      z-index: 20;
      background: var(--navbar);
      box-shadow: 0 0.5rem 2rem var(--shadow-color);
      transition: background 0.2s ease-out;
    `;
    return (
      <StyledHeader>
      <BackgroundImage 
      fluid={this.state.bg}
      style={{
        backgroundColor:'black',
        width:'100%',
         overflow:'hidden',
         backgroundRepeat: 'repeat-x',
         backgroundSize:'50% 180%',
         }}
         >
         <Navlinks linkData={this.state.linkData} />
      </BackgroundImage>
      </StyledHeader>
    )
  }
}
