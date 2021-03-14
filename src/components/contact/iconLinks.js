import React from 'react'
import styled from 'styled-components';
import {contactIcons} from "./fontIcons"




const ListedIcons =styled.a`
margin: 0 10px;
font-size: 1.5em;
width 1.5em;
height:1.5em;
padding:.2em;
color: var(--text);
box-shadow: 1px 1px 2px var(--text2);
border-radius: 50%;
display: inline-block;
position: relative;
`
const Placement = styled.div`
text-align: center;
`
const Svg = styled.svg`
color: var(--text);
&:hover{
    color:black;
}
`

const IconGenerator = (keyName) =>{
    return( 
    contactIcons.map((index) =>{
              return(
              
                    <ListedIcons  href={index.link}  className='contactIcons' key={keyName+index.name} >
                        
                       <Svg role="img" 
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth= "0" 
                        height="1em"
                        width="1em"
                        viewBox="0 0 24 24"
                        
                    
                       >
                           <path  d={index.path} />
                       </Svg>
                         <span className='IconSpan' >{index.name} </span>
                    </ListedIcons>
                    
                
              );
            }))
  }
export default function iconLinks() {
    return (
        <Placement  > 
           
                <IconGenerator />
            
        </Placement>
    )
}


