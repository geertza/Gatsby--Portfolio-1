import React, { Component } from 'react'
import emoji from "react-easy-emoji";
import Img from "gatsby-image"
import "./skill.css"
export default class skills extends Component {
    constructor(props) {
        super();
        this.state = {
            title: "What I do",
            subTitle: "CRAZY FULL STACK DEVELOPER WHO THIRST TO LEARN EVERYTHING .... CURRENTLY EXPLORING",
            skills: [
              emoji(
                "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
              ),
              emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
              emoji(
                "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
              )
            ]
        }}
    render() {
        console.log(this.state.title)
        return (
            <section >
                <h2 style={{width:'100%',textAlign:'center', fontSize:'2em',marginTop:'20%'}}>{this.state.title}</h2>
                <div style={{display:'flex',margin:'-5% auto'}} >
                    <div className='deskSpace'>
                        <Img fluid={this.props.desk.childImageSharp.fluid} className='desk' />
                    </div>
                        <div>
                        <div className='skillInfo' >
                        
                        <h4>{this.state.subTitle}</h4>
                        {this.state.skills.map((index) =>{
                            return(
                                <p key={index}>{index}</p>
                            )
                        })}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
