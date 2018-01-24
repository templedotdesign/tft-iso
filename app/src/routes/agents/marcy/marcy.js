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
import marcyImage from '../../../assets/marcy.png';

class Marcy extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }
  render() {
    const buttons = [
      {buttonTitle: 'Contact Me', to:'mailto:TravelAgentMarcy@gmail.com'}
    ]
    return (
      <Wrapper>
        <Heading heading="Hi!  I'm Marcy!"/>
        <Column justification='space-around' alignment='center'>
          <Avatar src={marcyImage} alt='marcy'/>
          <AgentInfo currentAgent='marcy' resizeable width="95%"/>
          <CallToAction title="Get In Touch" buttons={buttons} width='80%' vertical email/>
        </Column>
      </Wrapper>
    );
  }
}

export default Marcy;