import React, { Component } from 'react'
import info from "./ProjectInfo"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components';
export default class proMobile extends Component {
    
    render() {
        const  getBackground = (id,data) =>{
                let item =  data.find(item=>item.node.name === (id+'Icon'));
           
                return(item.node.childrenImageSharp[0].fluid)
            }

          //   styled components
          const Projects=styled.article`
          width: 100vw;
          flex-wrap: wrap;
          
        `

        const ProCard=styled.div`
        width: 90vw;
          height: fit-content;
          margin: 5px 5vw;
          z-index:3;
          @media only screen and (min-width: 600px) {
            margin: 10px 5vw;
          }
        `
      
        
        const Article =styled.h4`  
            font-size: 1.2em;
            lineHeight: 100%;
            width:100%;
           background-color: var(--bg);
           margin-left:5px;
           margin-top:5px; 
           float:left;  
           @media only screen and (max-width: 600px) {
            font-size: .8em;
          }        
        `
        const Button =styled.a`
            width:fit-content;
            height: fit-content;
            background-color: var(--bg2);
            font-size: .7em;
            text-shadow: none;
            border-radius: 10px;
            border-style:solid;
            border-color:var(--bg3);
            margin:  0 ;

            padding:4px;
            color: var(--text);
            font-weight :800;
            cursor: pointer;
            float:right;
            &:hover{
                background-color:var(--bg3);
                color:var(--bg2);
            }
        ` 
        const Image =styled.img`
        height:4vw;
        width:auto;
        margin: 0 ;
        padding: 0;
        background-color: white;
        border-radius: 5px;
        @media only screen and (max-width: 600px) {
          height:5vh;
          width:5vh;
        }
    `
        const Ul = styled.ul`
        list-style: none;
        display: flex;
        flex-wrap:wrap;
        width:20vw;
        margin:0;
        ` 
        return (
            <Projects id='projects'>
            {info.map(i => (
              // getBackground(i.id,this.props.data),
              <ProCard id={i.id} key={i.key} > 
                <h3 style={{
                    color:'var(--highlight)',
                    textShadow:'2px 1px 2px silver',
                    textAlign:'center',
                    top:'0',
                    margin:'0',
                    backgroundColor:'var(--bg3)',
                    fontSize: '1.2em',
                    }}>
                        {i.title}
                </h3>
                <div style={{display:'flex'}} >
              <div>
              <BackgroundImage
              className='ProImage'
                fluid={getBackground(i.id,this.props.data.tv.edges)}
                   />  
                 <Ul  >
                        {i.lang.map(function (image){
                            return(
                              <li  key={image} style={{height:'fit-content',margin:'0'}}>
                                <Image 
                                src={require(`../../images/${image}.png`)}  alt='Cool Skills' 
                                 />
                                </li>
                            )
                        })
                        }
                    </Ul>   
                    </div>
                    <div>
                      <Article >
                          {i.p1}
                          </Article>
                          <Article style={{margin:'0 0 10px 2vw'}}>
                          {i.p2}
                      </Article>
                <div style={{display:'flex',position:'relative' ,bottom:'0vh',float:'right'}} >
                    <Button  href={i.git}>See The Code</Button>
                    <Button  href={i.demo}>See It In Action</Button>
                    </div> 
              </div>
              </div>
               </ProCard>
        ))}
            </Projects>
        )
    }
}
