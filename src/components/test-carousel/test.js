import React, { Component } from 'react'
import test1 from "../../images/sun.webp"
import test2 from "../../images/burger-time.webp"
import test3 from "../../images/andyg.png"


export default class photoSlider extends Component {
  constructor(props) {
    super();
    this.state = {
      index: 0,
      images:[test1,test2,test3],
      
    };
    this.slideRight = this.slideRight.bind(this);
    this.slideLeft = this.slideLeft.bind(this);
  }
  // increases index by 1
  slideRight() {
    console.log('right')
    if (this.state.index !== (this.state.images.length -1) ){
      this.setState(prevState => {
        return {index: prevState.index + 1}
     })
   console.log(this.state.index)
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
    return (
      <div>
        <div>
        <button onClick={this.slideLeft}>{"<"}</button>
        <img src={this.state.images[this.state.index]} alt='pic not loading' />
        <button onClick={this.slideRight}>{">"}</button>
      </div>
      </div>
    )
  }
}



// const images = [
//      test,test,test
//     ];
