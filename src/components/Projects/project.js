import React, { Component } from 'react'
import info from "./ProjectInfo"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components';
export default class proMobile extends Component {
    
    render() {
        const  getIcons = (id,data) =>{
                let item =  data.find(item=>item.node.name === (id+'Icon'));
                return(item.node.childrenImageSharp[0].fluid)
            }

          //   styled components
          const Projects=styled.article`
          width: 100vw;
          display: flex;
          flex-wrap: wrap;
          
        `

        const ProCard=styled.div`
        width: 500px;
          height: fit-content;
          margin: 5px auto;
          z-index:3;
          background-color:var(--bg3);
          border-radius:15px;
          padding: 5px;
          @media only screen and (min-width: 600px) {
            margin: 10px auto;
          }
        `
      
        
        const Article =styled.h4`  
            font-size: .7em;
            font-weight: 100;
            lineHeight: 100%;
            width:100%;
           margin-left:5px;
           margin-top:2px; 
           float:left;
           color:var(--text2);
           text-shadow: var(--textShadow);  
           @media only screen and (max-width: 600px) {
            font-size: .8em;
            padding:7px;
          }        
        `
        const Button =styled.a`
            width:fit-content;
            height: fit-content;
            background-color: var(--Tv);
            font-size: .7em;
            text-shadow: none;
            border-radius: 10px;
            margin:  0 10px ;
            line-height: 100%;
            padding:3px;
            color: var(--text2);
           text-shadow: var(--textShadow);
            font-weight :800;
            cursor: pointer;
            float:right;
            border:1.5px var(--text2) solid;
            &:hover{
                background-color:var(--bg3);
                color:white;
            }
        ` 
        const Image =styled.img`
        height:4vw;
        width:auto;
        margin: 0 ;
        padding: 0;
        background-color: var(--bg);
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
        width:100%;
        margin:0;
        ` 
        return (
            <Projects id='projects'>
            {info.map(i => (
              // getIcons(i.id,this.props.data),
              <ProCard id={i.id} key={i.key} > 
                <h3 style={{
                    color:'var(--text2)',
                    textShadow:'2px 1px 2px silver',
                    textAlign:'center',
                    top:'0',
                    margin:'0',
                    fontSize: '1.4em',
                    width:'100%',
                    padding:'3px',
                    }}>
                        {i.title}
                </h3>
                <div style={{display:'flex'}} >
              <div>
              <BackgroundImage
              className='ProImage'
                fluid={getIcons(i.id,this.props.data.tv.edges)}
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
                    <div >
                      <Article >
                          {i.p1}
                          </Article>
                          <Article >
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
