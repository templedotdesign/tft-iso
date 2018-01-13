import React from 'react';

import Banner from '../banner/banner';
import ImageBoxRow from '../imageBoxRow/imageBoxRow';
import CallToAction from '../callToAction/callToAction';
import TabbedDiv from '../tabbedDiv/tabbedDiv';

import classes from './home.css';

import wordImage from '../../assets/world.jpg';
import globeImage from '../../assets/globe.jpeg';
import mapImage from '../../assets/map.jpeg';
import handsImage from '../../assets/hands.jpeg';

const home = (props) => {
  const boxes = [
    {src: globeImage, buttonTitle: 'Take The Tour', caption: 'Find Out Why We Do What We Do.'},
    {src: handsImage, buttonTitle: 'Romance Travel', caption: 'Feel The Love!'},
    {src: mapImage, buttonTitle: 'Group Travel', caption: 'See The World With Us.'}
  ]
  return (
    <div className={classes.home}>
      <Banner heading="Let Us Do All The Work And You'll Have Tons Of Fun On Your Next Trip!" imageUrl={wordImage}/>
      <ImageBoxRow boxes={boxes}/>
      <h1 style={{textAlign: 'center', marginBottom: '20px'}}>Featured Agent</h1>
      <TabbedDiv/>
      <CallToAction title="Let's Connect!" caption='Ready To Book With Us?' buttonTitle='Contact Us'/>
    </div>
  );
};

export default home;