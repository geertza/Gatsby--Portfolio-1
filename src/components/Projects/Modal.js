import React from 'react';
import {Modal, Button, Col,Row} from 'react-bootstrap';
import projectInfo from "./ProjectInfo"






class MyVerticallyCenteredModal extends React.Component {
  constructor() {
    super()

    this.state = {
      displayTitle:'',
      displayP1:'',
      displayP2:'',
      lang:[],
      git:'',
      demo:'',
      img:'sunLogo.webp'
    };
  }
  
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.title !== prevProps.title) {
      let x = this.props.title
      const {title,p1,p2,img,lang,git,demo}=projectInfo[x]
      this.setState({
        displayTitle: title, 
        displayP1:p1,
        displayP2:p2,
        lang:lang,
        git: git,
        demo: demo,
        img: img  
     });
    
    }
  } 
  render(){  
   
    
    return (
       <div   >
         
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        enforceFocus={true}
        style={{
          zIndex:'9999',
         marginTop:'1%'
        
        }}
      >
        <Modal.Header   
        style={{
            background:"grey",
            padding: '0',
            height:"auto"
        }}
         closeButton>
          
            <h1 className='justify-content-center'
                style={{
                textAlign:"center",
                fontSize:"2em",
                width:"auto",
                margin:'0',
                marginLeft:'20%'
            }}
            >{this.state.displayTitle}</h1>
           
         
        </Modal.Header>
        <Modal.Body
        style={{
            background:"black"
        }}
        >
                <Row>
                  <Col md={8}>
                  <img src={require(`../../images/${this.state.img}`)} alt=''
                style={{
                width:'90%',
                height:'auto',
                  
                }}
                />
                </Col>
                <Col md={4}> 
                <Button onClick={this.props.onHide} variant="secondary" style={{backgroundColor:'rgb(146, 146, 30)',color:"black",margin:"5px 1%",textShadow:"grey .5px .5px",padding:'2px'}} href={this.state.git}>GitHub Code</Button>
                <Button onClick={this.props.onHide} variant="secondary" style={{backgroundColor:'rgb(146, 146, 30)',color:"black",margin:"0% 1%",textShadow:"grey .5px .5px",padding:'2px'}} href={this.state.demo}>Live Demo</Button>
                <div>
      <ul className='modalList'>
          {this.state.lang.map(function (image){
            return <img key={image} 
            src={require(`../../images/${image}.png`)} 
            className="img-responsive" alt='' 
            style={{
              height:'40px',
              float:"right",
              margin:'0'
            }} />
            })
          }
        </ul>
      </div>
                </Col>
                </Row>


            <Row>
                <Col>
                    <h5>Basic Description</h5>
                    <p style={{color:'white',lineHeight:'100%'}}>
                    {this.state.displayP1}
                    </p>
                    <h5>Technical Description</h5>
                    <p style={{color:'white',lineHeight:'100%'}}>
                       {this.state.displayP2}
                    </p>
                </Col>
          
        </Row>
        </Modal.Body>
        <Modal.Footer
        style={{
            background:"grey",
            height:'7vh',
            position:'relative'
        }}
        > 
       <Button onClick={this.props.onHide} variant='secondary'  style={{position:'absolute'}}>Close</Button>
        </Modal.Footer>
      </Modal>
     

        </div>

    );
  }
}

  
  export default MyVerticallyCenteredModal;