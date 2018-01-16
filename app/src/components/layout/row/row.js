//Core
import React from 'react';

//CSS
import classes from './row.css';

const row = (props) => {
  const style = {
    justifyContent: props.justification,
    alignItems: props.alignment
  }
  return (
    <div className={classes.row} style={style}>
      {props.children}
    </div>
  );
};

export default row;