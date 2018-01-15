//Core
import React, { Component } from 'react';

//Components
import Banner from '../../components/banner/banner';
import ImageBoxRow from '../../components/imageBoxRow/imageBoxRow';
import CallToAction from '../../components/callToAction/callToAction';
import ParallaxWindow from '../../components/parallaxWindow/parallaxWindow';
import TabbedDiv from '../../components/tabbedDiv/tabbedDiv';

//CSS
import classes from './home.css';

//Assets
import wordImage from '../../assets/world.jpg';
import globeImage from '../../assets/globe.jpeg';
import mapImage from '../../assets/map.jpeg';
import handsImage from '../../assets/hands.jpeg';
import beachImage from '../../assets/sunset2.jpeg';
import stephImage from '../../assets/stephanie-temple.jpg';

class Home extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }
  
  render() {
    const boxes = [
      {src: globeImage, buttonTitle: 'Take The Tour', caption: 'Find Out Why We Do What We Do.', to: '/about', exterior: false },
      {src: handsImage, buttonTitle: 'Romance Travel', caption: 'Feel The Love!', to: 'http://twoheartsonetrip.com/', exterior: true },
      {src: mapImage, buttonTitle: 'Group Travel', caption: 'See The World With Us.', to: '/group-travel', exterior: false }
    ]
    return (
      <div>
        <img src={beachImage} alt="beach" className={classes.background}/>
        <Banner heading="Let Us Do All The Work And You'll Have Tons Of Fun On Your Next Trip!" imageUrl={wordImage} alignment='flex-end'/>
        <div className={classes.row} >
          <img className={classes.agent} src={stephImage} alt='steph'/>
          <TabbedDiv/>
        </div>
        <ImageBoxRow boxes={boxes} style={{borderRadius: '40%'}}/>
        <ParallaxWindow quote="We travel not to escape life, but for life not to escape us." author='Anonymous'/>
        <div style={{padding: '100px 0', backgroundColor: 'white'}}>
          <CallToAction title="Let's Connect!" caption='Ready To Book With Us?' buttonTitle='Contact Us' to='/contact' width='60%'/>
        </div>
      </div>
    );
  }
}

export default Home;