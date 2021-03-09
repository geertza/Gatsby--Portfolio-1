import React, { Component } from 'react'
import styled from 'styled-components';
import phoenix from "../../images/phoenix.png"
import Icons from "../contact/iconLinks"
export default class intro extends Component {
    render() {
        const H1=styled.header`
        color: var(--text);
        font-weight: 800;
        font-size: 1.2em;
        font-family: cursive;
        text-shadow:var(--textShadow);
        `
        const IntroIcons= styled.div`
        margin:1em 5px;
        `
        const IntroText=styled.div`
        box-shadow: 0px 0px 12px gray; 
        background-color: var(--bg2);
        margin:20vh -10vw auto 20vw;
        padding: 30px;
        text-align: center;
        border-top-left-radius:150px ;
        border-bottom-left-radius:150px ;
        height: fit-content;
        width: 80vw;
        display:flex;
        flex-wrap: wrapped;
        @media screen and (max-width: 450px) {
            display:block;
            width:80%;
            height: 95vw;
            border-top-right-radius:150px;
            margin:0 10%;
          };
        
        `
        const Img = styled.img`
        height:20vw;
        width:20vw;
        background-color:var(--highlight);
        border-radius: 50%;
        margin: auto 0;
        animation:flicker 1.5s infinite alternate;
        @media screen and (max-width: 450px) {
            margin: -2vh 0 0 0;
        } 
        `
      
        return (
                <div style={{height:'80vh',marginTop:'30vh'}} >
                <IntroText  id='intro'>
                    <Img src={phoenix}  alt='phoenix'/>
                <div style={{height:'fit-content',marginLeft:'3%'}}>
                <H1>Nice To Meet You</H1>
                <H1> I'M Andy G, </H1>
                <p>A fullStack Web developer</p>
                <IntroIcons>
                <Icons   keyName='intro'/>
                </IntroIcons>
                </div>
                </IntroText>
             </div>
        )
    }
}
