import React from 'react';
import ProCarousal from './carousel/ProjectCarousel'
import "./projects.css"
//---------images------------

function Projects() {
   
     return (
        <div className='proBg'>
            <div className='projects '> 
                <h3  className='proTitle ' >Projects</h3>
                 <div className='proSlide' >
                    <ProCarousal />
                
                </div>
                
        </div>
            </div>
       
    )
    
}

export default Projects;