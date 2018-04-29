//Core
import React, { Component } from 'react';

//Components
// import BannerSlider from '../../components/bannerSlider/bannerSlider';
import Banner from '../../components/layout/banner/banner';
import ImageBox from '../../components/imageBox/imageBox';
import Row from '../../components/layout/row/row';
import Wrapper from '../../components/layout/wrapper/wrapper';

//Assets
import hutsImage from '../../assets/huts.jpeg';
import hawaiiImage from '../../assets/hawaii.png';
import seasideImage from '../../assets/seaside.jpg';
import germanyImg from '../../assets/germanCastle.jpg';
import roseImg from '../../assets/roses.jpeg';
// import germanCoastImg from '../../assets/germanCoast.jpeg';
// import northernLightsImg from '../../assets/northernLights.jpeg';
// import cruiseShipImg from '../../assets/cruiseShip.jpeg';

class FeaturedTrips extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    // let images = [
    //   { 
    //     src: hutsImage,
    //     options: {
    //       size: 'cover',
    //       position: 'center'
    //     }
    //   },
    //   { 
    //     src: northernLightsImg,
    //     options: {
    //       size: 'cover',
    //       position: 'center'
    //     }
    //   },
    //   { 
    //     src: cruiseShipImg,
    //     options: {
    //       size: 'cover',
    //       position: 'center'
    //     }
    //   },
    //   { 
    //     src: germanCoastImg,
    //     options: {
    //       size: 'cover',
    //       position: 'center'
    //     }
    //   }
    // ]
    return (
      <Wrapper>
        {/* <BannerSlider images={images} heading='Featured Trips'/> */}
        <Banner src={hutsImage} heading='Featured Trips' alignment='center'/>
        <Row justification='space-around' alignment='center'>
          <ImageBox src={roseImg} buttonTitle='Tournament Of Roses' buttonTitle2='Parade, 2018' to='/featured-trips/rose-parade'/>
          <ImageBox src={hawaiiImage} buttonTitle='Cruising Hawaii, 2019' to='/featured-trips/hawaii'/>
        </Row>
        <Row justification='space-around' alignment='center'>
          <ImageBox src={seasideImage} buttonTitle='El Dorado Seaside Suites, 2019' to='/featured-trips/seaside'/>
          <ImageBox src={germanyImg} buttonTitle='Oberammergau &' buttonTitle2='The Sound Of Music, 2020' to='/featured-trips/germany'/>
        </Row>
      </Wrapper>
    );
  }
}

export default FeaturedTrips;