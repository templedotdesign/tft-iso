//Core
import React from 'react';
import { NavLink } from 'react-router-dom';

//Components
import Wrapper from '../wrapper/wrapper';

//CSS
import classes from './navLinks.css';

const navLinks = () => {
  return (
    <Wrapper>
      <NavLink to='/' exact activeClassName={classes.active}>Home</NavLink>
      <NavLink to='/forms' activeClassName={classes.active}>Forms</NavLink>
      <a href='https://www.disneytravelcenter.com/ms6f1ddcfc/' target='_blank' rel='noopener noreferrer'>Disney</a>
      <NavLink to='/group-travel' activeClassName={classes.active}>Group Travel</NavLink>
      <NavLink to='/resources' activeClassName={classes.active}>Resources</NavLink>
      <NavLink to='/about' activeClassName={classes.active}>About Us</NavLink>
      <NavLink to='/agents' activeClassName={classes.active}>Meet Our Agents</NavLink>
      <NavLink to='/contact' activeClassName={classes.active}>Contact Us</NavLink>
    </Wrapper>
  );
};

export default navLinks;