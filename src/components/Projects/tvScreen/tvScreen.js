import React, { Component } from 'react'
import styled from "styled-components"
import BackgroundImage from 'gatsby-background-image'

// create tv tube shaped element 
const TV = styled.div`
position: relative;
      width: 70vw;
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
      --neon-background-color: var(--tv);
        box-shadow:
        0 0 2rem #fff,
        inset 0 0 3rem #fff,
        0 0 2rem var(--neon-background-color),
        inset 0 0 2rem var(--neon-background-color),
        0 0 4rem var(--neon-background-color),
        inset 0 0 4rem var(--neon-background-color);   

`
const Display = styled.div`
content: '';
      position: absolute;
    width: 70vw;
    height: 80vh;
    top:-8%;
    left: 4%;
    border-radius: 50% / 10%;
    overflow:hidden;
    display: block;
    border-right: none;
    border-left: none;
    --neon-background-color: var(--tv);
    box-shadow:
        0 0 2rem #fff,
        inset 0 0 3rem #fff,
        0 0 2rem var(--neon-background-color),
        inset 0 0 2rem var(--neon-background-color),
        0 0 4rem var(--neon-background-color),
        inset 0 0 4rem var(--neon-background-color);  
`



const Button =styled.button`
width:14vw;
height: 7vh;
background-color: rgba(111, 103, 55);
font-size: .7em;
textShadow:grey .5px .5px;
border-radius: 10px;
margin: 1em;
textShadow: darkgrey 2px 2px;
color: black;
font-weight :800;
cursor: pointer;
`

const Image =styled.img`
height:1.5em;
margin: 0 ;
padding: 0;
`
const Article =styled.article`
font-size: .5em;
color: lightgreen;
lineHeight: 100%;            
`
// cycle threw object to find name === id  
const  getBackground = (id,data) =>{
    if (id === null){
        return
    }else{
            let i;
            for (i = 0; i < data.length; i++) {
                if (data[i].node.name === id.id){
                    let tempImage= data[i].node.childrenImageSharp[0].fluid
                    return tempImage
                }
            }
    }
}


export default class tvScreen extends Component {
    render() {
        const tvData = this.props.channel
        let output;
        // conditional rendering of tv screen
        if (tvData === null){ 
        output = <p style={{color:'gold',fontSize:'5em',margin:'10vh auto'}}>Projector</p>
         
         } else{
             output=(  
                 <Display>
                     <div className='TvBackground' >
                        <BackgroundImage 
                            fluid={getBackground(this.props.channel,this.props.data.tv.edges)}s 
                            style={{
                                height:'100%',
                                backgroundColor:'none',
                                // border:'black 3px solid'
                            }}
                            >  
                    <h3 style={{
                        color:'black',
                        position:'absolute',
                        bottom:'-15%',
                        textShadow:'darkgrey 2px 2px',
                        backgroundColor:'rgba(111, 103, 55, 0.526)',
                        borderRadius:'10px'
                        }}>
                            {tvData.title}
                        </h3>
                   
                </BackgroundImage>
                </div>
                <div className='computer'>       
                    <Article style={{marginTop:'5%'}}>
                        {tvData.p1}
                        </Article>
                        <Article style={{margin:'1em 1em 0 1em'}}>
                        {tvData.p2}
                    </Article>
                </div> 
                <div style={{display:'flex',margin:'0 0 0 7vw'}}> 
                    
                     <Button  variant="secondary"  
                                href={tvData.git}
                                >
                                GitHub
                                </Button>
                    {/* skill tabs */}
                    <ul  style={{margin:'1em',padding:'0',backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
                        {tvData.lang.map(function (image){
                            return(
                            <>  
                                <Image key={image}
                                src={require(`../../../images/${image}.png`)} 
                                className="img-responsive" alt='' 
                                 />
                                
                          </>  )
                        })
                        }
                    </ul>    
                    <Button variant="secondary" 
                        href={tvData.demo}
                        >Live Demo</Button>
                </div> 
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
        </div>
        )
    }
}
