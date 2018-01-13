import React from 'react';


import classes from './toolbar.css';

const toolbar = (props) => {
  return (
    <div className={classes.toolbar}>
      <h2>TONS OF FUN TRAVEL</h2>
      <div className={classes.row}>
        <p>Home</p>
        <p>Forms</p>
        <p>Group Travel</p>
        <p>Meet Our Agents</p>
        <p>Resources</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
}

export default toolbar;