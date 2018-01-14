//Core
import React from 'react';

//CSS
import classes from './footer.css';

const footer = (props) => {
  return (
    <div className={classes.footer}>
      <img src={props.logo} alt='logo'/>
      <div className={classes.column}>
        <p style={{fontSize: '1.7rem'}}>contact@tonsoffuntravel.net</p>
        <p className={classes.row}> 
          <span><i className="fa fa-facebook-official" aria-hidden="true"></i></span>
          <span><i className="fa fa-twitter" aria-hidden="true"></i></span>
          <span><i className="fa fa-instagram" aria-hidden="true"></i></span>
        </p>
        <p>Copyright 2018 Tons Of Fun Travel, Powered By Temple Design Solutions</p>
      </div>
    </div>
  );
}

export default footer;