//Core
import React, { Component } from 'react';

//Components
import Heading from '../../../components/layout/heading/heading';
import Wrapper from '../../../components/layout/wrapper/wrapper';

class Terms extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    return (
      <Wrapper>
        <Heading heading='Terms & Conditions'/>
      </Wrapper>
    );
  }
}

export default Terms;