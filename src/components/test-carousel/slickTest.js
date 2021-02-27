import React, { Component } from 'react'
import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slick.css"
import info from './ProjectInfo'
import Tv from "./tvScreen/tvScreen"
import { graphql, StaticQuery } from 'gatsby'

// const Section = styled.section`
// background: var(--bg2);
// width:100vw;
// margin: 10vh 0;
// margin-left: -5vw;
// padding: 30px 20px;
// // display: flex;
// `;

 class SlickTest extends Component {
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
      }
    render() {
//       const query = StaticQuery(graphql`
//   query HomePageQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `)
      console.log('slick data',this.props.data)
        return (
        // <Section  >
          <div className='project' >
            <Tv channel={this.state.channel}  />
            {/* {console.log('data',data)}   */}
        <Slider {...this.state.settings} style={{width:'30vh',height:'50vh',margin:'4em 0vw',backgroundColor:'grey'}} >
            {info.map(i => (
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



export default props => (
  <StaticQuery
    query={graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
    `}
    render={data => <SlickTest data={data} {...props} />}
  />
);