import React from 'react';

import classes from './imageBox.css';

const imageBox = (props) => {
  return (
    <div className={classes.imageBox}>
      <img src={props.src} alt={props.buttonTitle}/>
      <button>{props.buttonTitle}</button>
      <p>{props.caption}</p>
    </div>
  );
}

export default imageBox;