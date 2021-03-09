import React, { Component } from 'react'


import styled from 'styled-components';
import { animated } from 'react-spring';
import Navlinks from "./ancorlinks/anchorLinks"
import MobileMenu from './mobileMenu/mobileMenu';
import DarkMode from './dark-mode'

const Wrapper = styled.div`
  display: flex;
  height: ${({ isMobile }) => (isMobile ? '6rem' : '7rem')};
  position: relative;
`;
export default class navbar extends Component {
  constructor(props) {
    super();
    this.state = {
      // bg: props.data.navBG.childImageSharp.fluid,
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
      top: 0;
      left: 0;
      z-index: 20;
      background: var(--bg);
      box-shadow: 0 0.5rem 2rem var(--shadow-color);
      transition: background 0.2s ease-out;
      overflow: hidden;
    `;
    
    
 
    
    return (
      <StyledHeader>
      <div 
      style={{
        backgroundColor:'var(--bg2)',
        width:'100%',
        height: '2.6em',
         overflow:'hidden'
         }}
         > 
            <div style={{ display: "flex", float: 'right', }}>
          {this.state.isMobile ? (
             <Wrapper>
           <DarkMode />
           <MobileMenu
            />
            </Wrapper>
           ) : (
             <Wrapper>
              
            <Navlinks  style={{display:'inline-block'}}  />
            <DarkMode style={{display:'inline-block'}} />
            </Wrapper>
          )} 
           </div>
       
         
        
      </div>
      </StyledHeader>
    )
  }
}
