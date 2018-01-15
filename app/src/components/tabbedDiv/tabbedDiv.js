//CSS
import React, { Component } from 'react';

//Components
import Tab from '../tab/tab';

//CSS
import classes from './tabbedDiv.css';

class TabbedDiv extends Component {
  state = {
    tabs: [true, false, false, false],
    currentIndex: 0
  }

  updateTabs = (event, index) => {
    event.preventDefault();
    const updatedTabs = [];
    for(let i = 0; i < this.state.tabs.length; i++) {
      if(i === index) {
        updatedTabs.push(true);
      } else {
        updatedTabs.push(false);
      }
    }
    this.setState({...this.state, tabs: updatedTabs, currentIndex: index});
  }

  render() {
    let number = this.state.currentIndex + 1;
    let content = <h1 style={{textAlign: 'center'}}>Content For Tab {number}</h1>
    return (
      <div style={{width: '45vw'}}>
        <div className={classes.tabs}>
          <Tab title='Tab 1' current={this.state.tabs[0]} clicked={(event) => this.updateTabs(event, 0)}/>
          <Tab title='Tab 2' current={this.state.tabs[1]} clicked={(event) => this.updateTabs(event, 1)}/>
          <Tab title='Tab 3' current={this.state.tabs[2]} clicked={(event) => this.updateTabs(event, 2)}/>
          <Tab title='Tab 4' current={this.state.tabs[3]} clicked={(event) => this.updateTabs(event, 3)}/>
        </div>
        <div className={classes.content}>
          {content}
        </div>
      </div>
    );
  }
}

export default TabbedDiv;