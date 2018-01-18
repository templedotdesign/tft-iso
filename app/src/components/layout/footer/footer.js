//Core
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

//Components
import Column from '../column/column';
import Row from '../row/row';

//CSS
import classes from './footer.css';

const footer = (props) => {
  return (
    <div className={classes.footer}>
      <Row justification='space-between' alignment='center'>
        <Column justification='space-around' alignment='center'>
          <div className={classes.row}>
            <a href=''><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
            <a href=''><i className="fa fa-twitter" aria-hidden="true"></i></a>
            <a href=''><i className="fa fa-instagram" aria-hidden="true"></i></a>
          </div>
            <a href='mailto:temple@templedesignsolutions.com'>contact@tonsoffuntravel.net</a>        
            <p>Give Us A Call Today! 888-528-0396</p>
            <NavLink to='/terms' className={classes.terms}>Terms & Conditions</NavLink>
        </Column>
        <img src={props.logo} alt='logo'/>
      </Row>
      <p>California Seller Of Travel #2115727-40</p>
      <p>
        TONS OF FUN TRAVEL LLC Is Registered With The State Of Florida As A Seller Of Travel.
        Registration No. ST39527
      </p>
      <p>Copyright 2018 Tons Of Fun Travel, Powered By Temple Design Solutions</p>
    </div>
  );
}

export default withRouter(footer);