import React from 'react'
import { UUIDv4 } from "uuid-v4-validator";
import styled from 'styled-components';
import {contactIcons} from "./fontIcons"


const getKey = new UUIDv4()

const ListedIcons =styled.div`
margin: 0 10px;
font-size: 1.5em;
width 1.5em;
height:1.5em;
padding:.2em;
color: var(--text);
box-shadow: var(--textShadow);
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

const IconGenerator = () =>{
    return( 
    contactIcons.map((index) =>{
              return(
              
                    <ListedIcons  className='contactIcons'  >
                        {console.log('contact',index)}
                       <Svg role="img" 
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth= "0" 
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        width="1em"
                        viewBox="0 0 24 24"
                        key={Math.random(getKey)}
                    
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


