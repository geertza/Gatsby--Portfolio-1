import React from "react";
import "./SoftwareSkill.css";
import {skillsList} from "./skillsList";
import { UUIDv4 } from "uuid-v4-validator";
const getKey = new UUIDv4()

// creating a background from list of skills turned to svg logos

const SkillGenerator = () =>{
  return( 
  skillsList.map((index) =>{
           
            return (
              <li className='imgSkills'  key={Math.random(getKey)}>
                <svg role="img" 
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth= "0" 
                  height="1em"
                  width="1em"
                  viewBox="0 0 24 24"
                  key={Math.random(getKey)}
                  className='bgIcon'
                >
                  <path  d={index.path} />
                  
                 </svg>
              <p className='bgSpan' >{index.name} </p>
             </li>
  )
          }))
}
export default function SoftwareSkill() {
  return (
    <div >
      <div className="software-skills">
        <ul className="dev-icons" >
         <SkillGenerator />
         <SkillGenerator />
 
        </ul>
      </div>
    </div>
  );
}
