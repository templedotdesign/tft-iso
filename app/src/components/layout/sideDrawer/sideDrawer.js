//Core 
import React from 'react';

//Components
import Backdrop from './backdrop/backdrop';
import Column from '../../layout/column/column';
import NavLinks from '../navLinks/navLinks';
import Wrapper from '../../layout/wrapper/wrapper';

//CSS
import classes from './sideDrawer.css';

const sideDrawer = (props) => {
  let attachedClasses = [];
  if(props.visible) {
    attachedClasses = [classes.sideDrawer, classes.open]
  } else {
    attachedClasses = [classes.sideDrawer, classes.closed]
  }
  return (
    <Wrapper>
      <Backdrop visible={props.visible}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.button}>
          <h2>TONS OF FUN TRAVEL</h2>
          <p onClick={props.clicked}><i className="fa fa-times" aria-hidden="true"></i></p>
        </div>
        <Column justification='space-around' alignment='center' height='100%' width='100%'>
          <NavLinks clicked={props.clicked}/>
        </Column>
      </div>
    </Wrapper>
  );
};

export default sideDrawer;