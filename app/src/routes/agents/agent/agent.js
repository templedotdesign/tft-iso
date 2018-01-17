//Core
import React, { Component } from 'react';

//Components
import Avatar from '../../../components/avatar/avatar';
import Wrapper from '../../../components/layout/wrapper/wrapper';
import Heading from '../../../components/layout/heading/heading';
import Row from '../../../components/layout/row/row';
import AgentInfo from '../../../components/agentInfo/agentInfo';

//Assets
import stephImage from '../../../assets/steph.png';

class Agent extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    return (
      <Wrapper>
        <Heading heading="Hi!  I'm Stephanie"/>
        <Row justification='space-around' alignment='center' width='100%'>
          <Avatar src={stephImage} alt='steph'/>
          <AgentInfo currentAgent='stephanieTemple'/>
       </Row>

      </Wrapper>
    );
  }
}

export default Agent;