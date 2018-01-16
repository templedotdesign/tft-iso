//Core
import React, { Component } from 'react';

//Components
import Avatar from '../../components/avatar/avatar';
import AgentInfo from '../../components/agentInfo/agentInfo';
import { Background, QuoteWindow } from '../../components/quoteWindow/quoteWindow';
import Banner from '../../components/layout/banner/banner';
import CallToAction from '../../components/callToAction/callToAction';
import ImageBox from '../../components/imageBox/imageBox';
import Row from '../../components/layout/row/row';
import Wrapper from '../../components/layout/wrapper/wrapper';

//Assets
import beachImage from '../../assets/sunset2.jpeg';
import globeImage from '../../assets/globe.jpeg';
import handsImage from '../../assets/hands.jpeg';
import mapImage from '../../assets/map.jpeg';
import stephImage from '../../assets/stephanie-temple.jpg';
import wordImage from '../../assets/world.jpg';

class Home extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }
  
  render() {
    const buttons = [
      { buttonTitle: 'Contact Us', to: '/contact'}
    ];
    return (
      <Wrapper>
        <Banner heading="Let Us Do All The Work And You'll Have Tons Of Fun On Your Next Trip!" src={wordImage} alignment='flex-end'/>
        <div style={{backgroundColor: 'white'}}>
          <Row justification='space-around' alignment='center'>
            <Avatar src={stephImage} alt='steph'/>
            <AgentInfo currentAgent='stephanieTemple'/>
          </Row>
          <Row justification='space-between' alignment='center'>
            <ImageBox src={globeImage} buttonTitle='Take The Tour' caption='Find Out Why We Do What We Do.' to='/about'/>
            <ImageBox src={handsImage} buttonTitle='Romance Travel' caption='Feel The Love!' to='http://twoheartsonetrip.com/' exterior/>
            <ImageBox src={mapImage} buttonTitle='Group Travel' caption='See The World With Us.' to='/group-travel'/>
          </Row>
        </div>
        <QuoteWindow quote="We travel not to escape life, but for life not to escape us." author='Anonymous'/>
        <Background src={beachImage} alt="mountain pier"/>        
        <div style={{padding: '100px 0', backgroundColor: 'white'}}>
          <CallToAction title="Let's Connect!" caption= 'Ready To Book With Us?' buttons={buttons}/>
        </div>
      </Wrapper>
    );
  }
}

export default Home;