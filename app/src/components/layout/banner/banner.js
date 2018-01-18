//Core
import React from 'react';

//CSS
import classes from './banner.css';

const banner = (props) => {
  let style = {
    background: `url(${props.src})`,
    backgroundSize: 'cover',
    backgroundPosition: props.position,
    display: 'flex',
    alignItems: props.alignment,
    justifyContent: 'center',
    color: 'white',
    height: '80vh'
  }
  return (
    <div style={style}>
      <h1 className={classes.heading}>{props.heading}</h1>
    </div>
  );
}

export default banner;