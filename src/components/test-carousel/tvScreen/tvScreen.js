import React, { Component } from 'react'
import styled from "styled-components"
import BackgroundImage from 'gatsby-background-image'



const TV = styled.div`
position: relative;
      width: 50vw;
      height: 80vh;
      margin: -2vh 5vw;
      background: black;
      border-radius: 50% / 10%;
      color: white;
      text-align: center;
      text-indent: .1em;
      
`
const Tv = styled.div`
content: '';
      position: absolute;
      top: 9.2%;
      bottom: 9.2%;
      right: -4.1%;
      left: -4.1%;
      background: inherit;
      border-radius: 4% / 50%;
      padding:0 ;
`
const Display = styled.div`
content: '';
      position: absolute;
    width: 50vw;
    height: 78vh;
    top:-8%;
    left: 4%;
    border-radius: 50% / 10%;
    overflow:hidden;
    display: block;
`

const Button =styled.button`
width:14vw;
background-color: rgb(146, 146, 30);
font-size: .7em;
textShadow:grey .5px .5px;
border-radius: 10px;
`

const Image =styled.img`
height:1.5em;
margin: 0 ;
padding: 0;
`
const P =styled.p`
font-size:.8em;
color: gold;
margin:0;
`


export default class tvScreen extends Component {
    render() {
        const tvData = this.props.channel
        let output;
        if (tvData === null){ 
        output = <p style={{color:'gold',fontSize:'5em',margin:'10vh auto'}}>Projects</p>
         
         } else{
             output=(  
                 <Display>
                     <div 
                 className='test' >  
                    <ul className='modalList' style={{margin:'0',padding:'0',backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
                        {tvData.lang.map(function (image){
                            return( 
                            <Image key={image} 
                            src={require(`../../../images/${image}.png`)} 
                            className="img-responsive" alt='' 
                            style={{
                            
                            }} />
                            )
                            })
                        }
                    </ul>
                    
                    <h3 style={{color:'gold',margin:'0% auto 2% auto',textShadow:'darkgrey 2px 2px'}}>{tvData.title}</h3>
                   
                </div>
                    <P>Basic Description</P>
                    <P style={{color:'white',lineHeight:'100%'}}>
                    {tvData.p1}
                    </P>
                    <P>Technical Description</P>
                    <P style={{color:'white',lineHeight:'100%'}}>
                       {tvData.p2}
                    </P>
        
        </Display>
        
        
             )
            }
            
        
        return(
            <div style={{display:'flex'}} >
                <div>
                    <TV >
                        <Tv>
                            {output}
                        </Tv>
                    </TV>
                </div>
                <div>
                    <Button onClick={this.props.onHide} variant="secondary"  
                    // href={tvData.git}
                    >GitHub Code</Button>
                    <Button onClick={this.props.onHide} variant="secondary" 
                    //  href={tvData.demo}
                    >Live Demo</Button>
              </div>   
            </div>
        )
    }
}
