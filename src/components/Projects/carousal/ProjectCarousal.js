import React, { Component } from 'react'
import {Button} from 'react-bootstrap';
import MyVerticallyCenteredModal from '../Modal'
import AliceCarousel from 'react-alice-carousel';
import test from "../../images/socket.png"
import 'react-alice-carousel/lib/alice-carousel.css';
export default class ProjectCarousal extends Component {
    constructor(props) {
        super();
        this.state = {
            modalShow: false,
            title:'nerd'
        };
      }
  
    render() {
      const responsive = {
        0: { items: 1 },
        80: { items: 2 },
        1024: { items: 3 },
    };
    const handleDragStart = (e) => e.preventDefault();
    // const items = [
    //   <img src={test} alt='' onDragStart={handleDragStart} />,
    //   <img src={test} alt='' onDragStart={handleDragStart} />,
    //   <img src={test} alt='' onDragStart={handleDragStart} />,
    // ];

    let items = [
       // Dat---------------------------------
       <div className='proMargin'>
       <div className='ProCluster' >
       <div className='proImage Dat' >
       <div className='clusterTitle' >Role Playing Chat</div>
       <div id='Dat' >Dungeons </div>
       <div id='Dat' >& </div>
       <div id='Dat' >Theater</div> 
       <Button variant="warning" className='probutton DatButton'
           onClick={() =>{ 
               this.setState({title: 'Dat'});
           this.setState({modalShow: true});
           }}>
           Take a look
       </Button>
       </div>
       </div> 
       </div>
       ,
        // nerd---------------------------------
        <div className='proMargin'>
        <div className='ProCluster' >
        <div className='proImage nerd' >
        <div className='clusterTitle' >NerdVerse (Trivia)</div>
        <Button variant="warning" className='probutton nerdButton'
            onClick={() =>{ 
                this.setState({title: 'nerdverse'});
            this.setState({modalShow: true});
            }}>
            Take a look
        </Button>
        </div>
        </div> 
        </div>
        ,
        // sloshed-------------------------
        <div className='proMargin'>
      <div className='ProCluster pcRight' >
      <div className='proImage sloshed'>
      <div className='clusterTitle' >(Pub Locator App)</div>
      <div id='sloshed' >The Sloshed Guide</div> 
      <Button variant="warning" className='probutton nerdButton'
            onClick={() =>{ 
                this.setState({title: 'sloshed'});
            this.setState({modalShow: true});
            }}>
            Take a look
        </Button>
      </div>
      </div>
      </div>,
    //   burger-------------------
    <div className='proMargin'>
      <div className='ProCluster  ' >
      <div className='proImage burger'>
      <div className='clusterTitle' >(Make a burger)</div>
      <Button variant="warning" className='probutton nerdButton'
            onClick={() =>{ 
                this.setState({title: 'burger'});
            this.setState({modalShow: true});
            }}>
            Take a look
        </Button>
      </div>
      </div>
      </div>
      ,
        //   emp-------------------
        <div className='proMargin'>
        <div className='ProCluster  ' >
        <div className='proImage emp'>
        <div className='clusterTitle' >(Employee Directory)</div>
        <div id='emp'>Emp List</div>
        <Button variant="warning" className='probutton nerdButton'
            onClick={() =>{ 
                this.setState({title: 'emp'});
            this.setState({modalShow: true});
            }}>
            Take a look
        </Button>
        </div>
        </div>
        </div>
        ,
        <div></div>,
         ];
    return (
      <div style={{width:'100%'}}>
         <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        autoWidth
        disableDotsControls
        mobileTouch={false}
        style={{display:'block'}} 
    />
      </div>
    )
  }
}