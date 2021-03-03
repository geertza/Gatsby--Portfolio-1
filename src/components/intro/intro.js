import React, { Component } from 'react'
import styled from 'styled-components';
import phoenix from "../../images/phoenix.png"

export default class intro extends Component {
    render() {
        const H1=styled.header`
        margin-left: 5vw;
        margin-top:4vh;
        color: var(--standout);
        font-weight: 500;
        font-size: 2.8em;
        font-family: cursive;
        `
        const H2=styled.header`
        margin-left: 0vw;
        color: var(--standout);
        font-weight: 500;
        font-size: 2.3em;
        `
        return (
            <div>
                <div style={{display:'flex',margin:'auto 5%'}}>
                <img src={phoenix}  alt='phoenix'
                style={{
                    height:'50vh',
                    margin:'20vh 2vw 0vh -5vw',
                    display:'inline-flex'
                }}
                />
                <div style={{
                    display:'block',
                    marginTop:'20vh'
                    }}>
                <H2>Hello, nice to meet you I'm</H2>
                <H1>Andy G, a Web developer</H1>
                </div>
                </div>
            </div>
        )
    }
}
