import React, { Component } from 'react'
import "./contact.css"
import ContactLinks from "./iconLinks" 

export default class footer extends Component {
    render() {
        
        return (
            <div className='contact' id='contact'>
                
                {/* <h3 className='contact-title' >Contact Me</h3> */}
                <p className='contact-subTitle'>Shall We Make Something Great Together </p>
                <ContactLinks />
            </div>
        )
    }
}
