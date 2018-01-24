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
import tammyImage from '../../../assets/tammy.png';

class Tammy extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }
  render() {
    const buttons = [
      {buttonTitle: 'Contact Me', to:'mailto:travelagenttammysmith@gmail.com'}
    ]
    return (
      <Wrapper>
        <Heading heading="Hi!  I'm Tammy!"/>
        <Column justification='space-around' alignment='center'>
          <Avatar src={tammyImage} alt='tammy'/>
          <AgentInfo currentAgent='tammy' resizeable width="95%"/>
          <CallToAction title="Get In Touch" buttons={buttons} width='80%' vertical email/>
        </Column>
      </Wrapper>
    );
  }
}

export default Tammy;