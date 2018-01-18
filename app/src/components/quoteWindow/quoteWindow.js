//Core
import React from 'react';

//CSS
import classes from './quoteWindow.css';

const quoteWindow = (props) => {
  return (
    <div className={classes.quoteWindow}>
      <h1>{props.quote}</h1>
      <h2>- {props.author}</h2>
    </div>
  );
};

const background = (props) => {
  return (
    <img src={props.src} alt={props.alt} className={classes.background}/>
  );
};

export {
  quoteWindow as QuoteWindow,
  background as Background
};