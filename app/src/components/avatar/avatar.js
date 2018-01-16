//Core 
import React from 'react';

//CSS
import classes from './avatar.css';

const avatar = (props) => {
  return (
    <img src={props.src} alt={props.alt} className={classes.avatar}/>
  );
};

export default avatar;