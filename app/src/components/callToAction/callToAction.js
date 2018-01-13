import React from 'react';

import classes from './callToAction.css';

const callToAction = (props) => {
  return (
    <div className={classes.callToAction}>
      <div>
        <h3>{props.title}</h3>
        <p>{props.caption}</p>
      </div>
      <div>
        <button>{props.buttonTitle}</button>
      </div>
    </div>
  );
};

export default callToAction;
  


