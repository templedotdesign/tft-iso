//Core
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

//Components
import Avatar from '../../../components/avatar/avatar';
import Wrapper from '../../../components/layout/wrapper/wrapper';
import Heading from '../../../components/layout/heading/heading';
import Row from '../../../components/layout/row/row';
import AgentInfo from '../../../components/agentInfo/agentInfo';

//Constants
import { names } from '../../../constants/agents/agents';

//Assets
import stephImage from '../../../assets/steph.png';
import bobImage from '../../../assets/bob.png';
import dianeImage from '../../../assets/diane.jpg';
import lauraImage from '../../../assets/laura.png';
import lisaImage from '../../../assets/lisa.jpg';

class Agent extends Component {
  componentDidMount() {
    window.scroll(0,0);
    if(!names.includes(this.props.match.params.name)) {
      this.props.history.push('/notFound');
    }
  }

  render() {
    let imageSrc = null;
    let name = '';
    let currentAgent = ''
    switch(this.props.match.params.name) {
      case 'stephanie':
        imageSrc = stephImage;
        name = 'Stephanie'
        currentAgent = 'stephanie';
        break;
      case 'robert':
        imageSrc = bobImage;
        name = 'Robert'
        currentAgent = 'robert'
        break;
      case 'diane':
        imageSrc = dianeImage;
        name = 'Diane';
        currentAgent = 'diane';
        break;
      case 'laura':
        imageSrc = lauraImage;
        name = 'Laura';
        currentAgent = 'laura';
        break;
      case 'lisa':
        imageSrc = lisaImage;
        name = 'Lisa';
        currentAgent = 'lisa';
        break;
      default:
        console.error('routes/agent::unrecognizedAgentsName');
    }
    return (
      <Wrapper>
        <Heading heading={`Hi!  I'm ${name}!`}/>
        <Row justification='space-around' alignment='center' width='100%'>
          <Avatar src={imageSrc} alt='agent'/>
          <AgentInfo currentAgent={currentAgent}/>
       </Row>

      </Wrapper>
    );
  }
}

export default withRouter(Agent);