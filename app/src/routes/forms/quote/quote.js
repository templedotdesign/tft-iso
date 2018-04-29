//Core
import React, { Component } from 'react';

//Components
import Wrapper from '../../../components/layout/wrapper/wrapper';
import Heading from '../../../components/layout/heading/heading';
import QuoteForm from '../../../components/forms/quoteForm/quoteForm';

class Quote extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    return (
      <Wrapper>
        <Heading heading='Request A Quote'/>
        <QuoteForm/>
      </Wrapper>
    );
  }
}

export default Quote;