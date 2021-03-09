import React, { Component } from 'react'


import styled from 'styled-components';
import { animated } from 'react-spring';
import Navlinks from "./ancorlinks/anchorLinks"
import MobileMenu from './mobileMenu/mobileMenu';
import DarkMode from './dark-mode'

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;
export default class navbar extends Component {
  
  render() {
    const StyledHeader = styled(animated.header)`
      position: fixed;
      width: 100vw;
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
             <Wrapper>
              
            <Navlinks  style={{display:'inline-block'}}  />
            <DarkMode style={{display:'inline-block'}} />
            </Wrapper> 
           </div>
       
         
        
      </div>
      </StyledHeader>
    )
  }
}
