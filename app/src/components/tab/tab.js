import React from 'react';

import classes from './tab.css';

const tab = (props) => {
  let attachedClasses = [classes.tab];
  if(!props.current) {
    attachedClasses.push(classes.bottomBorder)
  }
  return (
    <div className={attachedClasses.join(' ')} onClick={props.clicked}>
      <p>{props.title}</p>
    </div>
  );
};

export default tab;