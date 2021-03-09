import React, { Component } from 'react'
import info from "./ProjectInfo"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components';
export default class proMobile extends Component {
    
    render() {
        const  getBackground = (id,data) =>{
                let item =  data.find(item=>item.node.name === (id+'Icon'));
            console.log('item',item)
                return(item.node.childrenImageSharp[0].fluid)
            }

          //   styled components
          const Projects=styled.article`
          width: 100vw;
          flex-wrap: wrap;
        `

        const ProCard=styled.div`
          width: 90vw;
          height: 40vh;
          margin: 0px 5vw;
          z-index:3;
        `
        const ProInfo=styled.div`
          
        `
        const Article =styled.h4`  
            font-size: .7em;
            lineHeight: 100%;
            width:100%;
           background-color: var(--bg);
           margin-left:5px;
           margin-top:5px;           
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
            &:hover{
                background-color:var(--bg3);
                color:var(--bg2);
            }
        ` 
        const Image =styled.img`
        height:2em;
        margin: 0 ;
        padding: 0;
    `
        const Ul = styled.ul`
        list-style: none;
        display: flex;
        ` 
        return (
            <Projects id='projects'>
            {info.map(i => (
              // getBackground(i.id,this.props.data),
              <ProCard id={i.id} key={i.key} > 
                <h3 style={{
                    color:'var(--highlight)',
                    textShadow:'2px 1px 2px silver',
                    backgroundColor:'var(--bg1)',
                    textAlign:'center',
                    top:'0',
                    margin:'0',
                    backgroundColor:'var(--bg3)',
                    }}>
                        {i.title}
                </h3>
                <div style={{display:'flex'}} >
              <div>
              <BackgroundImage
                style={{ height: "40vw", width: "40vw",margin:'0' }}
                fluid={getBackground(i.id,this.props.data.tv.edges)}
                   />  
                 <Ul  >
                        {i.lang.map(function (image){
                            return(
                              <li  key={image}>
                                <Image 
                                src={require(`../../images/${image}.png`)}  alt='Cool Skills' 
                                 />
                                </li>
                            )
                        })
                        }
                    </Ul>   
                    </div>
              <ProInfo>
             
                        <Article >
                        {i.p1}
                        </Article>
                        <Article style={{margin:'0 0 10px 2vw'}}>
                        {i.p2}
                    </Article>
                    <div style={{display:'flex',position:'relative' ,bottom:'0vh',left:'10vw'}} >
                    <Button  href={i.git}>See The Code</Button>
                    
                   
                    <Button  href={i.demo}>See It In Action</Button>
                    </div> 
              </ProInfo></div>
               </ProCard>
        ))}
            </Projects>
        )
    }
}
