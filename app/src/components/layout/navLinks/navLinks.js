//Core
import React from 'react';
import { NavLink } from 'react-router-dom';

//Components
import Wrapper from '../wrapper/wrapper';

//CSS
import classes from './navLinks.css';

const navLinks = (props) => {
  return (
    <Wrapper>
      <NavLink onClick={props.clicked} to='/' exact activeClassName={classes.active}>Home</NavLink>
      <NavLink onClick={props.clicked} to='/forms' activeClassName={classes.active}>Forms</NavLink>
      <NavLink onClick={props.clicked} to='/group-travel' activeClassName={classes.active}>Group Travel</NavLink>
      <a onClick={props.clicked} href='http://twoheartsonetrip.com/' target='_blank' rel='noopener noreferrer'>Romance Travel</a>
      <NavLink onClick={props.clicked} to='/family-travel' activeClassName={classes.active}>Family Travel</NavLink>
      <a onClick={props.clicked} href='https://www.disneytravelcenter.com/ms6f1ddcfc/' target='_blank' rel='noopener noreferrer'>Disney</a>      
      <NavLink onClick={props.clicked} to='/agents' activeClassName={classes.active}>Meet Our Agents</NavLink>
    </Wrapper>
  );
};

export default navLinks;