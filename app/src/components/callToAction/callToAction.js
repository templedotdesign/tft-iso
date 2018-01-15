//Core
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//CSS
import classes from './callToAction.css';

class CallToAction extends Component {
  onClick = (event, to) => {
    event.preventDefault();
    this.props.history.push(to);
  }

  render() {
    return (
      <div className={classes.callToAction} style={{width: this.props.width}}>
        <div>
          <h3>{this.props.title}</h3>
          <p>{this.props.caption}</p>
        </div>
        <div>
          <button onClick={(event) => this.onClick(event, this.props.to)}>{this.props.buttonTitle}</button>
        </div>
      </div>
    );
  }
}

export default withRouter(CallToAction);
  


