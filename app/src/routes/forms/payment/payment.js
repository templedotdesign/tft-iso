//Core
import React, { Component } from 'react';

//Components
import Wrapper from '../../../components/layout/wrapper/wrapper';
import Heading from '../../../components/layout/heading/heading';

//CSS
import classes from './payment.css'

class Payment extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    return (
      <Wrapper>
        <Heading heading='Payment Form'/>
        <div className={classes.form}>
          <iframe title='payment form' src='https://vacationcrm.com/travelmvc/IFramePayment?lookup_id=E5E13D10-0CBC-4FA6-929F-60D3ED921279'></iframe>
        </div>
      </Wrapper>
    );
  }
}

export default Payment;