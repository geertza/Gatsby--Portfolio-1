import React, { Component } from 'react'
import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slick.css"
import info from './ProjectInfo'
import Tv from "./tvScreen/tvScreen"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
// const Section = styled.section`
// background: var(--bg2);
// width:100vw;
// margin: 10vh 0;
// margin-left: -5vw;
// padding: 30px 20px;
// // display: flex;
// `;

 let bg1 =[];
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
      
      
      // componentDidMount(){
      //   console.log('info',this.props.data,'array',myArray)
      //   // myArray.find(x => x.id === '45').foo;
      //   console.log('find',this.props.data.find(item=>item.node.name === 'emp'))
      // }

    render() {
      

      console.log('bgimages',this.state.BgImages)
        return (
        // <Section  >
          <div className='project' >
            <Tv channel={this.state.channel} data={this.props.data}  />
            {/* {console.log('data',data)}   */}
        <Slider {...this.state.settings} style={{width:'20vh',height:'50vh',margin:'2em 0vw'}} >
            {info.map(i => (
              // getBackground(i.id,this.props.data),
             <div className='ProCluster' >
              <BackgroundImage
         style={{ height: "100%", width: "100%" }}
        fluid={getBackground(i.id,this.props.data)}
        >
              </BackgroundImage>
              </div>
        ))}
          </Slider>
         </div>
        // </Section>
        )
    }
}


