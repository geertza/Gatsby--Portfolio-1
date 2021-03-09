import React, { Component } from 'react'
import emoji from "react-easy-emoji";
import Img from "gatsby-image"
import "./skill.css"
export default class skills extends Component {
    constructor(props) {
        super();
        this.state = {
            title: "What I do",
            subTitle: "CRAZY FULL STACK DEVELOPER WHO THIRSTS FOR GREATER CODING SKILLS...",
            skills: [
              emoji(
                "⚡ Develops highly interactive User Interfaces for your web and mobile applications"
              ),
              emoji("⚡ Serverless designs with CMS intergration such as Wordpress/Shopify/Contentful.."),
              emoji(
                "⚡ Integration of third party services such as Firebase/ AWS / Netlify"
              )
            ]
        }}
    render() {
        
        return (
            <section  id='skills'>
                <h2 style={{width:'fit-content',textAlign:'center', fontSize:'2em',margin:'0 auto',marginTop:'20%',backgroundColor:'var(--bg)'}}>{this.state.title}</h2>
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
