//Core 
import React from 'react';

//Components
import Backdrop from './backdrop/backdrop';
import Row from '../row/row';
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
        <Row justification='space-around' alignment='center' height='90vh'>
          <NavLinks clicked={props.clicked}/>
        </Row>
      </div>
    </Wrapper>
  );
};

export default sideDrawer;