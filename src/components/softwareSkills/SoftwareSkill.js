import React from "react";
import "./SoftwareSkill.css";
import {skillsList} from "./skillsList";
import Img from "gatsby-image"
// import * as IconGenerator from  '@icons-pack/react-simple-icons';
import { UUIDv4 } from "uuid-v4-validator";
// import Skill from "./skills";
const getKey = new UUIDv4()

// const SkillGenerator = () =>{
//   return( 
//   skillsList.map((index) =>{
//             const newIcon = React.createElement(IconGenerator[index.Icon]);
//             return <li className='imgSkills' key={Math.random(getKey)}>{newIcon } <div  style={{fontSize:'.2em',marginTop:'-35px'}}>{index.skillName}</div></li> ;
//           }))
// }
export default function SoftwareSkill() {
  return (
    <div >
      <div className="software-skills">
        {/* <Skill /> */}
        <ul className="dev-icons" >
         {/* <SkillGenerator /> */}
         {/* <SkillGenerator /> */}
 
        </ul>
      </div>
    </div>
  );
}
