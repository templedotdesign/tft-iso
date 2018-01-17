//Core
import React from 'react';

//Components
import NavLinks from '../navLinks/navLinks';

//CSS
import classes from './toolbar.css';

const toolbar = (props) => {
  return (
    <div className={classes.toolbar}>
      <h2>TONS OF FUN TRAVEL</h2>
      <div className={classes.row}>
        <NavLinks/>
      </div>
      <div className={classes.menu}>
        <i onClick={props.clicked} className="fa fa-ellipsis-v" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default toolbar;