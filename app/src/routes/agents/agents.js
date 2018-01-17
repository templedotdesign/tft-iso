//Core
import React, { Component } from 'react';

//Components
import Banner from '../../components/layout/banner/banner';
import ImageBox from '../../components/imageBox/imageBox';
import Row from '../../components/layout/row/row';
import Wrapper from '../../components/layout/wrapper/wrapper';

//CSS
import classes from './agents.css';

//Assets
import agentsImage from '../../assets/agents.png';
import bobImage from '../../assets/bob.png'
import stephImage from '../../assets/steph.png';

class Agents extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Wrapper>
        <Banner heading='Meet Our Agents' src={agentsImage} alignment='flex-end' position='center'/>
        <Row justification='space-around' alignment='center'>
          <ImageBox src={stephImage} buttonTitle='Stephanie Temple' to='/agents/name' style={{borderRadius: '50%'}}/>
          <ImageBox src={bobImage} buttonTitle='Robert Temple' to='/agents/name' style={{borderRadius: '50%'}}/>
        </Row>
        <div className={classes.agents}>
          <Row justification='space-around' alignment='center'>
            <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
            <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
            <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
            <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
            <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
          </Row>
          <Row justification='space-around' alignment='center'>
            <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
            <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
            <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
            <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
            <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
          </Row>
          <Row justification='space-around' alignment='center'>
            <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
            <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
            <ImageBox src={stephImage} buttonTitle='Agent Name' to='/agents/name' style={{borderRadius: '50%'}}/>
          </Row>
        </div>
      </Wrapper>
    );
  }
}

export default Agents;