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
import backgroundImage from '../../assets/background.png';
import bobStephImage from '../../assets/bobSteph.png';
import familyImage from '../../assets/family.png';
import groupImage from '../../assets/group.png';
import romanceImage from '../../assets/romance.png';
import worldImage from '../../assets/world.png';

class Home extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }
  
  render() {
    const buttons = [
      { buttonTitle: 'Contact Us', to: 'http://www.emailmeform.com/builder/form/3vZY2Ke2bfgz' }
    ];
    return (
      <Wrapper>
        <Banner heading="Let Us Do All The Work And You'll Have Tons Of Fun On Your Next Trip!" src={worldImage} alignment='flex-end'/>
        <div style={{backgroundColor: 'white'}}>
          <Row justification='space-around' alignment='center'>
            <Avatar src={bobStephImage} alt='bob and steph'/>
            <AgentInfo currentAgent='owners'/>
          </Row>
          <Row justification='space-between' alignment='center'>
            <ImageBox src={familyImage} buttonTitle='Family Travel' caption='Make Some Memories.' to='/family-travel'/>
            <ImageBox src={romanceImage} buttonTitle='Romance Travel' caption='Feel The Love!' to='http://twoheartsonetrip.com/' exterior/>
            <ImageBox src={groupImage} buttonTitle='Group Travel' caption='See The World With Us.' to='/group-travel'/>
          </Row>
        </div>
        <QuoteWindow quote="We travel not to escape life, but for life not to escape us." author='Anonymous'/>
        <Background src={backgroundImage} alt="mountain pier"/>        
        <div style={{padding: '100px 0', backgroundColor: 'white'}}>
          <CallToAction title="Let's Connect!" buttons={buttons} exterior vertical/>
        </div>
      </Wrapper>
    );
  }
}

export default Home;