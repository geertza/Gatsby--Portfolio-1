import React from 'react'
import * as IconApi from  'react-icons/Si';
import { UUIDv4 } from "uuid-v4-validator";
import styled from 'styled-components';
const getKey = new UUIDv4()
const list =[
    {
    name: 'github',
    icon:'SiGithub'
},
{
    name:'upwork',
    icon:'SiUpwork'
},
{
    name:'Linked In',
    icon:'SiLinkedin'
},
{
    name:'Gmail',
    icon:'SiGmail' 
},
{
    name:'resume',
    icon: 'SiMicrosoftword'
}
]
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

const IconGenerator = () =>{
    return( 
    list.map((index) =>{
              const newIcon = React.createElement(IconApi[index.icon]);
              return(
                <> 
                    <ListedIcons className='contactIcons' key={Math.random(getKey)} >
                        {newIcon } 
              <span className='IconSpan'>{index.name} </span>
                    </ListedIcons>
                    
                </>
              );
            }))
  }
export default function iconLinks() {
    return (
        <Placement style={{display:'flex'}} >
         <IconGenerator />
        
        </Placement>
    )
}
