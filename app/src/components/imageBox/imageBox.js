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
    let alt = '';   
    if(!this.props.noLink) {
      if(this.props.exterior === true) {
        alt = this.props.buttonTitle;
        button = <a href={this.props.to} target='_blank' rel='noopener noreferrer'>{this.props.buttonTitle}</a>
      } else {
        alt = this.props.buttonTitle
        button = <a onClick={(event) => this.onClick(event, this.props.to)} style={{textAlign: 'center'}}>{this.props.buttonTitle}<br/>{this.props.buttonTitle2}</a>
      }
    } else {
      alt = this.props.alt
    }
    
    return (
      <div className={classes.imageBox}>
        <img src={this.props.src} alt={alt} style={this.props.style}/>
        {button}
        <h3>{this.props.caption}</h3>
      </div>
    );
  }
}


export default withRouter(ImageBox);