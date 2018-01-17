//Core
import React from 'react';

//CSS
import classes from './backdrop.css';

const backdrop = (props) => {
  if(props.visible) {
    return <div className={classes.backdrop}></div>
  } else {
    return null;
  }
};

export default backdrop;