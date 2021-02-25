import React, { Component } from 'react'
import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css"
// import ThumbTemplate from "./thumbTemplate";
import data from './ProjectInfo'

const Button = styled.button`
`;


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
        };
        // this.slideRight = this.slideRight.bind(this);
        // this.slideLeft = this.slideLeft.bind(this);
        // this.displayImages = this.displayImages.bind(this);
      }
    render() {
        return (<Slider {...this.state.settings} style={{width:'40vh',height:'73vh',margin:'5vw'}} >
            {data.map(i => (
        <div className='ProCluster ' id={i.id} key={i.id} >
       <p className={i.id} id='proText' >
        {i.title} 
       </p>
       </div>
       
        ))}
          </Slider>
        )
    }
}
