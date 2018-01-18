//Core
import React from 'react';

//CSS
import classes from './row.css';

const row = (props) => {
  const style = {
    justifyContent: props.justification,
    alignItems: props.alignment,
    width: props.width,
    height: props.height
  }
  let attachedClass = ''
  if(props.mobileReverse) {
    attachedClass = classes.reverseRow;
  } else {
    attachedClass = classes.row;
  }
  return (
    <div className={attachedClass} style={style}>
      {props.children}
    </div>
  );
};

export default row;