import React, { Component } from 'react'
import styled from "styled-components"



const TV = styled.div`
position: relative;
      width: 50vw;
      height: 60vh;
      margin: -2vh 5vw;
      background: black;
      border-radius: 50% / 10%;
      color: white;
      text-align: center;
      text-indent: .1em;
      
`
const Tv = styled.div`
content: '';
      position: absolute;
      top: 9.2%;
      bottom: 9.2%;
      right: -4.1%;
      left: -4.1%;
      background: inherit;
      border-radius: 4% / 50%;
      padding:0 ;
`
const Display = styled.div`
content: '';
      position: absolute;
    width: 50vw;
    height: 57vh;
    top:-8%;
    left: 4%;
    border-radius: 50% / 10%;
    overflow:hidden;
`

const Button =styled.button`
width:14vw;
background-color: rgb(146, 146, 30);
font-size: .7em;
textShadow:grey .5px .5px;
border-radius: 10px;
`

const Image =styled.img`
height:1.5em;
margin: 0 ;
padding: 0;
`



export default class tvScreen extends Component {
    render() {
        const tvData = this.props.channel
        console.log('tv data',tvData)
        const test = true;
        let output;
        {if (tvData === null){ 
        output = (
              <p style={{color:'gold',fontSize:'5em',margin:'10vh auto'}}>Projects</p>
         )
         } else{
             output=(  
                 <Display>
                     <div 
                 className='test' >  
                    <ul className='modalList' style={{margin:'0',padding:'0',backgroundColor:'black', opacity:'.6'}}>
                        {tvData.lang.map(function (image){
                            return( 
                            <Image key={image} 
                            src={require(`../../../images/${image}.png`)} 
                            className="img-responsive" alt='' 
                            style={{
                            
                            }} />
                            )
                            })
                        }
                    </ul>
                    </div>
                    <h3 style={{color:'gold',margin:'0% auto 2% auto',backgroundColor:'black'}}>{tvData.title}</h3>
                    {/* <div style={{display:'flex'}}> */}
                  {/* <img src={require(`../../../images/${tvData.img}`)} alt=''
                style={{
                width:'60%',
                height:'auto',}}
                /> */}
                
                <div>
                <Button onClick={this.props.onHide} variant="secondary"  href={tvData.git}>GitHub Code</Button>
                <Button onClick={this.props.onHide} variant="secondary"  href={tvData.demo}>Live Demo</Button>
                {/* </div> */}
                </div>
                <div>
      
      </div>
                    <h5>Basic Description</h5>
                    <p style={{color:'white',lineHeight:'100%'}}>
                    {tvData.displayP1}
                    </p>
                    <h5>Technical Description</h5>
                    <p style={{color:'white',lineHeight:'100%'}}>
                       {tvData.displayP2}
                    </p>
        
        </Display>
             )
            }
            
        }
        return(
            <div>
                 <TV >
              <Tv>
              {output}
              
              </Tv>
            </TV>
            </div>
        )
    }
}





  
//   componentDidUpdate(prevProps) {
//     // Typical usage (don't forget to compare props):
//     if (this.props.title !== prevProps.title) {
//       let x = this.props.title
//       const {title,p1,p2,img,lang,git,demo}=projectInfo[x]
//       this.setState({
//         displayTitle: title, 
//         displayP1:p1,
//         displayP2:p2,
//         lang:lang,
//         git: git,
//         demo: demo,
//         img: img  
//      });
    
//     }
//   } 
//  
//       
//         <Modal.Body
//         style={{
//             background:"black"
//         }}
//         >
//                 <Row>
//                   <Col md={8}>
//                   <img src={require(`../../../images/${tvData.img}`)} alt=''
//                 style={{
//                 width:'90%',
//                 height:'auto',
                  
//                 }}
//                 />
//                 </Col>
//                 <Col md={4}> 
//                 <Button onClick={this.props.onHide} variant="secondary" style={{backgroundColor:'rgb(146, 146, 30)',color:"black",margin:"5px 1%",textShadow:"grey .5px .5px",padding:'2px'}} href={this.state.git}>GitHub Code</Button>
//                 <Button onClick={this.props.onHide} variant="secondary" style={{backgroundColor:'rgb(146, 146, 30)',color:"black",margin:"0% 1%",textShadow:"grey .5px .5px",padding:'2px'}} href={this.state.demo}>Live Demo</Button>
//                 <div>
//       <ul className='modalList'>
//           {this.state.lang.map(function (image){
//             return <img key={image} 
//             src={require(`../../../images/${image}.png`)} 
//             className="img-responsive" alt='' 
//             style={{
//               height:'40px',
//               float:"right",
//               margin:'0'
//             }} />
//             })
//           }
//         </ul>
//       </div>
//                 </Col>
//                 </Row>


//             <Row>
//                 <Col>
//                     <h5>Basic Description</h5>
//                     <p style={{color:'white',lineHeight:'100%'}}>
//                     {this.state.displayP1}
//                     </p>
//                     <h5>Technical Description</h5>
//                     <p style={{color:'white',lineHeight:'100%'}}>
//                        {this.state.displayP2}
//                     </p>
//                 </Col>
          
//         </Row>
//         </Modal.Body>
//         <Modal.Footer
//         style={{
//             background:"grey",
//             height:'7vh',
//             position:'relative'
//         }}
//         > 
//        <Button onClick={this.props.onHide} variant='secondary'  style={{position:'absolute'}}>Close</Button>
//         </Modal.Footer>
//       </Modal>
     

//         </div>

//     );
//   }
// }