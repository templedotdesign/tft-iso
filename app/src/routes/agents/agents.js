//Core
import React, { Component } from 'react';

//Components
import Banner from '../../components/layout/banner/banner';
import ImageBox from '../../components/imageBox/imageBox';
import Row from '../../components/layout/row/row';
import Wrapper from '../../components/layout/wrapper/wrapper';

//Assets
import agentsImage from '../../assets/agents.jpeg';
import stephImage from '../../assets/stephanie-temple.jpg';

class Agents extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Wrapper>
        <Banner heading='Meet Our Agents' src={agentsImage} alignment='flex-end' position='center'/>
        <Row justification='space-around' alignment='center'>
          <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
          <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
        </Row>
        <Row justification='space-around' alignment='center'>
          <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
          <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
          <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
        </Row>
        <Row justification='space-around' alignment='center'>
          <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
          <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
        </Row>
        <Row justification='space-around' alignment='center'>
          <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
          <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
          <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
        </Row>
        <Row justification='space-around' alignment='center'>
          <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
          <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
        </Row>
        <Row justification='space-around' alignment='center'>
          <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
          <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
          <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
        </Row>
      </Wrapper>
    );
  }
}

export default Agents;