import React, { Component } from 'react'
import info from "./ProjectInfo"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components';


// map out card for each project to be displayed
export default class project extends Component {
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
          width: 80vw;
          height: 20vw;
          margin: 8vh 10vw;
          display: flex;
          
        `
        const ProInfo=styled.div`
          
          padding: 10px;
        `
        const Article =styled.h4`  
            font-size: .7em;
            lineHeight: 100%;
            max-width:60vw; 
           background-color: var(--bg);
           margin-left:5vw;
           margin-top:5px;           
        `
        const Button =styled.a`
            width:fit-content;
            height: 7vh;
            background-color: var(--bg2);
            font-size: .7em;
            text-shadow: none;
            border-radius: 10px;
            border-style:solid;
            border-color:var(--bg3);
            margin: .6em;
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
            height:1.5em;
            margin: 0 ;
            padding: 0;
        `
        const Ul = styled.ul`
        list-style: none;
        display: flex;
        ` 
        const Li = styled.li`
        
        `      
        return (
            <Projects>
            {console.log('data',this.props.data)}
            {info.map(i => (
              // getBackground(i.id,this.props.data),
              <ProCard id={i.id} key={i.key} >
              <BackgroundImage
         style={{ height: "20vw", width: "20vw" }}
        fluid={getBackground(i.id,this.props.data.tv.edges)}
        >
              </BackgroundImage>
              <ProInfo>
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
                        <Article >
                        {i.p1}
                        </Article>
                        <Article style={{margin:'0 0 15px 10vw'}}>
                        {i.p2}
                    </Article>
                    <div style={{display:'flex',position:'relative' ,bottom:'0vh',left:'10vw'}} >
                    <Button  href={i.git}>See The Code</Button>
                    
                    <Ul  >
                        {i.lang.map(function (image){
                            return(
                              <li style={{marginBottom:'10vh'}}>
                                <Image 
                                key={image}
                                src={require(`../../images/${image}.png`)} 
                                className="img-responsive" alt='' 
                                 />
                                </li>
                            )
                        })
                        }
                    </Ul>   
                    <Button  href={i.demo}>See It In Action</Button>
                    </div> 
              </ProInfo>
               </ProCard>
        ))}
            </Projects>
        )
    }
}
