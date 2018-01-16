//Core 
import React from 'react';

//CSS
import classes from './heading.css'

const heading = (props) => {
  return (
    <div className={classes.heading}>
      <h1>{props.heading}</h1>
      <hr/>
    </div>
  );
};

export default heading;