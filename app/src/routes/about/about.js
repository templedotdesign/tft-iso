//Core
import React, { Component } from 'react';

class About extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <div style={{marginTop: '100px'}}>
        About
      </div>
    );
  }
}

export default About;