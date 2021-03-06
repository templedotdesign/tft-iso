//CSS
import React, { Component } from 'react';

//Components
import Tab from './tab/tab';

//CSS
import classes from './agentInfo.css';

//Constants
import  * as agents from '../../constants/agents/agents';

class AgentInfo extends Component {
  state = {
    tabs: [true, false, false, false, false, false, false],
    currentIndex: 0,
    currentAgent: this.props.currentAgent
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
    let content = [];
    let tabs = [];
    let style = {};
    if(this.props.resizeable) {
      style = {
        width: this.props.width
      }
    }
    const agent = agents[this.state.currentAgent];
      const agentKeys = Object.keys(agent);
      tabs = agentKeys.map((key, index) => {
        if(index === this.state.currentIndex) {
          agent[key].content.map((item) => {
            return content.push(item);
          })
        }
        return <Tab key={key} title={agent[key].title} current={this.state.tabs[index]} clicked={(event) => this.updateTabs(event, index)}/> 
      })
    
    return (
      <div className={classes.agentInfo} style={style}>
        <div className={classes.tabs}>
          {tabs}
        </div>
        <div className={classes.content}>
          {content.map(x => {
            return <p key={x}>{x}</p>
          })}
        </div>
      </div>
    );
  }
}

export default AgentInfo;