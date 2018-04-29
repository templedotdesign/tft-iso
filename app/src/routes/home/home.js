//Core
import React, { Component } from 'react';

//Components
import Avatar from '../../components/avatar/avatar';
import AgentInfo from '../../components/agentInfo/agentInfo';
import { Background, QuoteWindow } from '../../components/quoteWindow/quoteWindow';
import Banner from '../../components/layout/banner/banner';
// import BannerSlider from '../../components/bannerSlider/bannerSlider';
import CallToAction from '../../components/callToAction/callToAction';
import Column from '../../components/layout/column/column';
import Heading from '../../components/layout/heading/heading';
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
// import balloonImg from '../../assets/balloon.jpg';
// import coastalImg from '../../assets/coastalLights.jpg';
// import footprintsImg from '../../assets/footprints.jpg';

class Home extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }
  
  render() {
    const buttons = [
      { buttonTitle: 'management@tonsoffuntravel.net', to: 'mailto:management@tonsoffuntravel.net' },
      { buttonTitle: 'stephanie@tonsoffuntravel.net', to: 'mailto:stephanie@tonsoffuntravel.net' },
      { buttonTitle: 'bob@tonsoffuntravel.net', to: 'mailto:bob@tonsoffuntravel.net' }
    ];
    // let images = [
    //   { 
    //     src: worldImage,
    //     options: {
    //       size: 'cover',
    //       position: 'center'
    //     }
    //   },
    //   { 
    //     src: balloonImg,
    //     options: {
    //       size: 'cover',
    //       position: 'center'
    //     }
    //   },
    //   { 
    //     src: coastalImg,
    //     options: {
    //       size: 'cover',
    //       position: 'center top'
    //     }
    //   },
    //   { 
    //     src: footprintsImg,
    //     options: {
    //       size: 'cover',
    //       position: 'center'
    //     }
    //   }
    // ]
    return (
      <Wrapper>
        {/* <BannerSlider images={images} heading="Let Us Do All The Work And You'll Have Tons Of Fun On Your Next Trip!" align='flex-end'/> */}
        <Banner heading="Let Us Do All The Work And You'll Have Tons Of Fun On Your Next Trip!" src={worldImage} alignment='flex-end'/>
        <div style={{backgroundColor: 'white'}}>
          <Heading heading='Welcome To Tons Of Fun Travel!'/>
          <Row justification='space-around' alignment='center'>
            <Column justification='space-around' alignment='center'>
              <Avatar src={bobStephImage} alt='bob and steph'/>
              <CallToAction title="Let's Connect!" buttons={buttons} width='90%' email vertical/>
            </Column>
            <AgentInfo currentAgent='owners'/>
          </Row>
          <Row justification='space-around' alignment='center'>
            <ImageBox src={familyImage} buttonTitle='Family Travel' caption='Make Some Memories.' to='/family-travel'/>
            <ImageBox src={romanceImage} buttonTitle='Romance Travel' caption='Feel The Love!' to='http://twoheartsonetrip.com/' exterior/>
            <ImageBox src={groupImage} buttonTitle='Group Travel' caption='See The World With Us.' to='/group-travel'/>
          </Row>
        </div>
        <QuoteWindow quote="We travel not to escape life, but for life not to escape us." author='Anonymous'/>
        <Background src={backgroundImage} alt="mountain pier"/>        
      </Wrapper>
    );
  }
}

export default Home;