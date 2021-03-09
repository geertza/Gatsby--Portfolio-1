import React, { Component } from 'react'


import styled from 'styled-components';
import { animated } from 'react-spring';
import Navlinks from "./ancorlinks/anchorLinks"
import DarkMode from './dark-mode'


// create navbar component with anchorlinks and drakmode toggle
const Wrapper = styled.div`
  display: flex;
  flex-wrap:wrap;
  position: relative;
  margin: 0 6vw;
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
    const NavBar = styled.div`
    backgroun-color:var(--bg2);
        width: 100%;
        height: 2.6em ;
         overflow: hidden;
         @media screen and (max-width: 450px){
           height: 5.5em;
         }
    `
    
    
 
    
    return (
      <StyledHeader>
        <NavBar > 
            <div style={{ display: "flex", float: 'right', }}>
             <Wrapper>
              
            <Navlinks  style={{display:'inline-block'}}  />
            <DarkMode style={{display:'inline-block'}} />
            </Wrapper> 
           </div>
      </NavBar>
      </StyledHeader>
    )
  }
}
