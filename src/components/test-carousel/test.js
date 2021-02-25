import React, { Component } from 'react'
import styled from "styled-components"
import { animated, useTransition, config } from "react-spring";

import test1 from "../../images/sun.webp"
import test2 from "../../images/burger-time.webp"
import test3 from "../../images/andyg.png"


const Img = styled.img`
height: 20vh;
width:25vvw;
&:after{
  transform: translateY(20px);
transition: transform ease-out 5s;
}
`
const Wrapper = styled.div`
display:flex;

`


export default class photoSlider extends Component {
  constructor(props) {
    super();
    this.state = {
      index: 2,
      images:[test1,test2,test3,test1,test2,test3],
    };
    this.slideRight = this.slideRight.bind(this);
    this.slideLeft = this.slideLeft.bind(this);
    // this.displayImages = this.displayImages.bind(this);
  }
  // increases index by 1
  slideRight() {
    if (this.state.index !== (this.state.images.length -3) ){
      this.setState(prevState => {
        return {index: prevState.index + 1}
     })
  }
  };
// decreases index by 1
  slideLeft() {
    if (this.state.index !== 0 )
    this.setState(prevState => {
      return {index: prevState.index - 1}
   })
  };
  
  render() {
    // const transitions = useTransition(index, p => p, {
    //   from: { opacity: 0, transform: "translateX(100%)" },
    //   enter: { opacity: 1, transform: "translateX(0%)" },
    //   leave: { opacity: 0, transform: "translateX(-150%)" },
    //   config: config.slow
    // });
  
  
    return (
      <div>
        <div>
        <button onClick={this.slideLeft}>{"<"}</button>
        {  this.state.images.slice(this.state.index, this.state.index + 3).map(i => {
          console.log(i)
      return (
      <Wrapper>
      <Img src={i} alt='pic not loading' key={i} />
      </Wrapper>
      )
    })}
        <button onClick={this.slideRight}>{">"}</button>
      </div>
      </div>
    )
  }
}



