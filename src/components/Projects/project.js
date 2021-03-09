import React, { Component } from 'react'
import ProMobile from './proMobile'
import ProPc from './proPc'

// map out card for each project to be displayed
export default class project extends Component {
    constructor() {
        super();
        this.state = {
          width: window.innerWidth,
        };
      }
    //   event listeners to determine if client device is mobile and return different layouts for different devices
      componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }
      
      // make sure to remove the listener
      // when the component is not mounted anymore
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }
      
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };
      
      render() {
        const { width } = this.state;
        const isMobile = width <= 600;
        
        if (isMobile) {
            return (
                <ProMobile data={this.props.data} />
            );
          } else {    
        return (
           <ProPc data={this.props.data}/>
        )
    }
}
}
