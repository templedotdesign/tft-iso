//Core
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

//CSS
import classes from './footer.css';

const footer = (props) => {
  return (
    <div className={classes.footer}>
      <img src={props.logo} alt='logo'/>
      <div className={classes.column}>
        <p className={classes.row}> 
          <span><i className="fa fa-facebook-official" aria-hidden="true"></i></span>
          <span><i className="fa fa-twitter" aria-hidden="true"></i></span>
          <span><i className="fa fa-instagram" aria-hidden="true"></i></span>
        </p>
        <a style={{fontSize: '1.7rem', marginBottom: '20px'}} href='mailto:temple@templedesignsolutions.com'>contact@tonsoffuntravel.net</a>        
        <p>Give Us A Call Today! 888-528-0396</p>
        <NavLink to='/terms' className={classes.terms}>Terms & Conditions</NavLink>
        <p>Copyright 2018 Tons Of Fun Travel, Powered By Temple Design Solutions</p>
      </div>
    </div>
  );
}

export default withRouter(footer);