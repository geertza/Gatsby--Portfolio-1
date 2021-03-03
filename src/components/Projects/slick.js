import React, { Component } from 'react'
// import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slick.css"
import info from './ProjectInfo'
import Tv from "./tvScreen/tvScreen"
import BackgroundImage from 'gatsby-background-image'




const  getBackground = (id,data) =>{
  let item =  data.find(item=>item.node.name === (id+'Icon'));
 return(item.node.childrenImageSharp[0].fluid)

}

 export default class Slick extends Component {
    constructor(props) {
        super();
        this.state = {
            settings : {
                dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      speed:600,
      arrows: true,
          },
          channel:null,
          BgImages:['name','title'],
          sam: ['hello',3,2]
        };
        this.changeChannel = this.changeChannel.bind(this);
        // this.slideLeft = this.slideLeft.bind(this);
        // this.displayImages = this.displayImages.bind(this);
      }

      changeChannel(site){
        this.setState({
          channel:site
        })
      }
    render() {
        return (
        <section  tag='Projects' >
          <div
            
           className='project'>
            <Tv channel={this.state.channel} data={this.props.data} className='Tv' />
            {/* {console.log('data',data)}   */}
        <Slider {...this.state.settings} style={{width:'20vh',height:'50vh',margin:'3em 0vw'}} >
            {info.map(i => (
              // getBackground(i.id,this.props.data),
              <button className='ProCluster ' id={i.id} key={i.id} onClick={() => {this.changeChannel(i)}}>
              <BackgroundImage
         style={{ height: "100%", width: "100%" }}
        fluid={getBackground(i.id,this.props.data.tv.edges)}
        >
              </BackgroundImage>
              </button>
        ))}
          </Slider>
         </div >
         </section>
        )
    }
}


