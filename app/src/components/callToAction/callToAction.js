//Core
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//Components
import Column from '../../components/layout/column/column';

//CSS
import classes from './callToAction.css';

class CallToAction extends Component {
  onClick = (event, to) => {
    event.preventDefault();
    this.props.history.push(to);
  }

  render() {
    let buttons = [];
    let style = {
      width: this.props.width
    };
    let justification = '';
    this.props.buttons.map(button => {
      if(this.props.exterior === true) {
        return buttons.push(<a style={{margin: '10px'}} key={button.to} href={button.to} target='_blank' rel='noopener noreferrer'>{button.buttonTitle}</a>)
      } else if(this.props.email === true) {
        return buttons.push(<a style={{margin: '10px'}} key={button.to} href={button.to}>{button.buttonTitle}</a>)
      } else {
        return buttons.push(<a style={{margin: '10px'}} key={button.to} onClick={(event) => this.onClick(event, button.to)}>{button.buttonTitle}</a>)
      }
    })
    if(this.props.vertical) {
      style = {
        ...style,
        flexDirection: 'column',
      }
      justification = 'space-around'; 
    } else {
      justification = 'flex-end'
    }
    return (
      <div className={classes.callToAction} style={style}>
        <div>
          <h2>{this.props.title}</h2>
          <p>{this.props.caption}</p>
        </div>
        <Column justification={justification} alignment='center'>
          {buttons}
        </Column>
      </div>
    );
  }
}

export default withRouter(CallToAction);
  


