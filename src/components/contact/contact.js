import React, { Component } from 'react'
import "./contact.css"
import ContactLinks from "./iconLinks" 

export default class footer extends Component {
    render() {
        
        return (
            <div  id='contact'>
                <p className='contact-subTitle'>Shall We Make Something Great Together </p>
                <div style={{width:'70vw',marginLeft:'-20%'}}>
                <ContactLinks keyName='contact' />
                </div>
            </div>
        )
    }
}
