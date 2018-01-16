//Core 
import React from 'react';

//CSS
import classes from './column.css';

const column = (props) => {
  const style = {
    justifyContent: props.justification,
    alignItems: props.alignment,
    width: props.width
  }
  return (
    <div className={classes.column} style={style}>
      {props.children}
    </div>
  );
};

export default column;
