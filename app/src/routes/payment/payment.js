//Core
import React, { Component } from 'react';

//CSS
import classes from './payment.css'

class Payment extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    return (
      <div className={classes.payment}>
          <h1 style={{color: '#2376ec'}}>Payment Form</h1>
          <hr/>
          <div className={classes.form}>
            <iframe title='payment form' src='https://vacationcrm.com/travelmvc/IFramePayment?lookup_id=E5E13D10-0CBC-4FA6-929F-60D3ED921279'></iframe>
          </div>
      </div>
    );
  }
}

export default Payment;