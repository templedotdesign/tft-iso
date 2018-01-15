//Core
import React, { Component } from 'react';

//Components
import Wrapper from '../../components/wrapper/wrapper';
import ReservationForm from '../../components/reservationForm/reservationForm';

//CSS
import classes from './reservation.css';

class Reservation extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    return (
      <Wrapper>
        <div className={classes.reservation}>
          <h1 style={{color: '#2376ec'}}>Reservation Form</h1>
          <hr/>
        </div>
        <ReservationForm/>
      </Wrapper>
    );
  }
}

export default Reservation;