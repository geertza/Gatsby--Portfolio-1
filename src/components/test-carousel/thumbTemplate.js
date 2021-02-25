import React, { Component } from 'react'
import data from './ProjectInfo'
import './slick.css'



export default function thumbTemplate() {
        // console.log(data)
        return (data.map(i => (
        <div className='ProCluster ' id={i.id} key={i.id} >
       <p className={i.id} id='proText' >
        {i.title} 
       </p>
       </div>
       
        )))
}
