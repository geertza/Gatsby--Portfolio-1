import React, { Component } from 'react'
import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slick.css"
import data from './ProjectInfo'
import Tv from "./tvScreen/tvScreen"


// const Section = styled.section`
// background: var(--bg2);
// width:100vw;
// margin: 10vh 0;
// margin-left: -5vw;
// padding: 30px 20px;
// // display: flex;
// `;




// import { useStaticQuery, graphql } from "gatsby"

// const data = useStaticQuery(graphql`
// query SiteQuery {
//   graphcms {
//     project {
//       id
//     }
//   }
  
// }
// `)




export default class slickTest extends Component {
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

        };
        this.changeChannel = this.changeChannel.bind(this);
        // this.slideLeft = this.slideLeft.bind(this);
        // this.displayImages = this.displayImages.bind(this);
      }

      changeChannel(site){
        this.setState({
          channel:site
        })
        console.log(this.state.channel)
      }
    render() {
        return (
        // <Section  >
          <div className='project' >
            <Tv channel={this.state.channel}  />
              
        <Slider {...this.state.settings} style={{width:'40vh',height:'50vh',margin:'1em 0vw',backgroundColor:'grey'}} >
            {data.map(i => (
        <button className='ProCluster ' id={i.id} key={i.id} onClick={() => {this.changeChannel(i)}} >
       <p className={i.id} id='proText' >
        {i.title} 
       </p>
       </button>
       
        ))}
          </Slider>
         </div>
        // </Section>
        )
    }
}
