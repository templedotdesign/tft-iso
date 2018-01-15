//Core 
import React, { Component } from 'react';

//CSS
import classes from './nashville.css';

//Assets
import guitarImage from '../../assets/guitar.jpeg';

class Nashville extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    return (
      <div className={classes.nashville}>
        <h1 style={{color: '#2376ec'}}>Nashville, 2018</h1>
        <hr/>
        <h3 style={{textAlign: 'center'}}>
          Join Us For "Have Tons Of Fun In Nashville Bus Trip" October 5th-7th, 2018 
        </h3>
        <p>
          Join Bob & Stephanie Temple on their motor coach trip from Kenton, Ohio to Nashville, Tennessee.  We 
          will depart Kenton at 7:30 a.m. on Friday, October 5, 2018. Upon arrival in Nashville, we will check 
          into the Hampton Inn Vanderbilt West End.  The hotel offers a free shuttle to attractions like Honky 
          Tonk Row within a 2 mile radius of their location.  The hotel also offers free wi-fi and breakfast. 
        </p>
        <p>
          Guests can spend Friday evening at their leisure.  On Saturday, they would have free time until 2:30 
          p.m. when we will meet our bus for the transfer to the Grand Ole Opry Backstage Tour at 3:30 p.m.  At 
          4:45 p.m. we have a group dinner reservation at Opry Backstage Grill where the waitstaff perform 
          musical numbers while serving  you.  We then need to be in our seats at the Grand Ole Opry by 6:30 
          p.m.   We have Tier 2 seats on the rear of the main floor for the Grand Ole Opry performance on 
          Saturday evening.  Following the performance, our motorcoach will return us to the Hampton Inn.
        </p>
        <p>
          On Sunday,  following hotel check out we will depart for Kenton at approximately 11:30 a.m., so that 
          we are home in time for everyone to prepare for their work week ahead.
        </p>
        
        <div style={{textAlign: 'center', padding: '50px 0'}}>
          <img src={guitarImage} alt='guitar'/>
          <p>Pricing</p>
          <p>Single Occupancy $675 Per Person</p>
          <p>Double Occupancy $445 Per Person</p>
          <p>Triple Occupancy $370 Per Person</p>
          <p>Quad Occupancy $330 Per Person</p>
        </div>
        <p>
          $75 deposit holds your spot.  Only 53 spots are available.  We expect this trip to fill up quickly.  
          After deposit, payments can be made on your schedule, as long as trip is paid in full before 8/1/18.  
          After 8/1/18 no refunds can be made, but trip is transferrable.
        </p>
        <small>
          Tons of Fun Travel reserves the right to cancel this group trip and refund monies paid if we do not 
          have 45 participants.
        </small>
        <div className={classes.buttons}>
          <p style={{textAlign: 'center', color: 'white'}}>Reserve your spot today!</p>
          <div className={classes.row}>
            <a className={classes.button} href='http://www.emailmeform.com/builder/form/e0c76cj9LcD90ZA6emt' target='_blank' rel='noopener noreferrer'>Reservation Request</a>
            <a className={classes.button} href='https://www.emailmeform.com/builder/form/r8dlx276S7o1OL5y6' target='_blank' rel='noopener noreferrer'>Credit Card Authorization</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Nashville;