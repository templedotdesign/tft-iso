//Core 
import React, { Component } from 'react';

//Components
import AgentInfo from '../../../components/agentInfo/agentInfo';
import Avatar from '../../../components/avatar/avatar';
import CallToAction from '../../../components/callToAction/callToAction';
import Column from '../../../components/layout/column/column';
import Heading from '../../../components/layout/heading/heading';
import Wrapper from '../../../components/layout/wrapper/wrapper';

//Assets
import julieImage from '../../../assets/julie.png';

class Julie extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }
  render() {
    const buttons = [
      {buttonTitle: 'Contact Me', to:'mailto:travelagentjuliekimmel@gmail.com'}
    ]
    return (
      <Wrapper>
        <Heading heading="Hi!  I'm Julie!"/>
        <Column justification='space-around' alignment='center'>
          <Avatar src={julieImage} alt='julie'/>
          <AgentInfo currentAgent='julie' resizeable width="95%"/>
          <CallToAction title="Get In Touch" buttons={buttons} width='80%' vertical email/>
        </Column>
      </Wrapper>
    );
  }
}

export default Julie;