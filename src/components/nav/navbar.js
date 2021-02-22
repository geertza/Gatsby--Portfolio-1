import React, { Component } from 'react'

import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components';
import { animated, useSpring, config } from 'react-spring';
import Navlinks from "./navLinks"
import MobileMenu from './mobileMenu/mobileMenu';
import DarkMode from './dark-mode'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  justify-content: space-between;
  transition: all 0.2s ease-out;
  user-select: none;
  height: ${({ isMobile }) => (isMobile ? '6rem' : '7rem')};
`;
export default class navbar extends Component {
  constructor(props) {
    super();
    this.state = {
      linkData: props.data.graphcms.navbarLinks,
      bg: props.data.navBG.childImageSharp.fluid,
      isMobile: false,
      menuOpened: false
    };
  }
  toggleClass() {
    const currentState = this.state.menuOpened;
    this.setState({ menuOpened: !currentState });
  };


  // Change navbar content according to device demensions
  changeMobile() {
    window.matchMedia('(max-width: 37.5em)').matches
    ? this.setState({isMobile:true})
    : this.setState({isMobile:false})
  };

  componentDidMount() {
    this.changeMobile();
    window.addEventListener("resize", this.changeMobile.bind(this));
  }
  
  render() {
    const StyledHeader = styled(animated.header)`
      position: fixed;
      width: 100%;
      height: 2em;
      top: 0;
      left: 0;
      z-index: 20;
      background: var(--bg);
      box-shadow: 0 0.5rem 2rem var(--shadow-color);
      transition: background 0.2s ease-out;
    `;
    
    
 
    
    return (
      <StyledHeader>
      <BackgroundImage 
      fluid={this.state.bg}
      style={{
        backgroundColor:'var(--nav)',
        width:'100%',
        height: '4em',
         overflow:'hidden',
         backgroundRepeat: 'repeat-x',
         backgroundSize:'50% 180%',
         }}
         >
            <Wrapper isMobile={this.state.isMobile} style={{ display: "flex", float: 'right', }}>
          {/* <LogoNavbar
            setMenuOpened={this.setState({menuOpened:true})}
          /> */}
          {this.state.isMobile ? (
            <MobileMenu
              linkData={this.state.linkData}
            />
           ) : (
            <Navlinks  linkData={this.state.linkData} />
          )} 
          <DarkMode />
        </Wrapper>
         
        
      </BackgroundImage>
      </StyledHeader>
    )
  }
}
