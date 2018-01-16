//Core
import React, { Component } from 'react';

//Components
import Wrapper from '../../../components/layout/wrapper/wrapper';
import Heading from '../../../components/layout/heading/heading';
import ReservationForm from '../../../components/forms/reservationForm/reservationForm';

class Reservation extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    return (
      <Wrapper>
        <Heading heading='Reservation Form'/>
        <ReservationForm/>
      </Wrapper>
    );
  }
}

export default Reservation;