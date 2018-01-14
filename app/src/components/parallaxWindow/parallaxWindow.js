//Core
import React from 'react';

//CSS
import classes from './parallaxWindow.css';

const parallaxWindow = (props) => {
  return (
    <div className={classes.parallaxWindow}>
      <h1>{props.quote}</h1>
      <h3>- {props.author}</h3>
    </div>
  );
}

export default parallaxWindow;