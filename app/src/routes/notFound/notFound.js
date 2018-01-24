//Core 
import React, { Component } from 'react';

//Components
import Heading from '../../components/layout/heading/heading';

class NotFound extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }
  
  render() {
    return (
      <Heading heading='404 - Page Not Found'/>
    );
  }
}

export default NotFound;