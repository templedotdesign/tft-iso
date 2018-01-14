//Core
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//CSS
import classes from './imageBox.css';

class ImageBox extends Component {
  onClick = (event, to) => {
    event.preventDefault();
    this.props.history.push(to);
  };

  render() {
    let button = null;
    if(this.props.exterior === true) {
      button = <a href={this.props.to} target='_blank' rel='noopener noreferrer'>{this.props.buttonTitle}</a>
    } else {
      button = <button onClick={(event) => this.onClick(event, this.props.to)}>{this.props.buttonTitle}</button>
    }
    return (
      <div className={classes.imageBox}>
        <img src={this.props.src} alt={this.props.buttonTitle} style={this.props.style}/>
        {button}
        <p>{this.props.caption}</p>
      </div>
    );
  }
}


export default withRouter(ImageBox);