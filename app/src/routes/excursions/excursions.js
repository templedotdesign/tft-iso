//Core
import React, { Component } from 'react';

//Components
import Banner from '../../components/banner/banner';
import ImageBoxRow from '../../components/imageBoxRow/imageBoxRow'; 

//Assets
import skyDiveImage from '../../assets/skydiving.jpg';
import scubaImage from '../../assets/scuba.jpeg';

class Excursions extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    const boxes1 = [
      { src: scubaImage, buttonTitle: 'Tour Sales', to: 'http://www.toursales.com/Default.asp?Click=127156', exterior: true },
      { src: scubaImage, buttonTitle: 'Island Routes', to: 'http://www.islandroutes.com/?referral=D82FAD1C&agent_id=33972', exterior: true }
    ];
    const boxes2 = [
      { src: scubaImage, buttonTitle: 'Shore Excursions', to: 'https://www.shoreexcursionsgroup.com/?&id=298810&data=stephanie%40tonsoffuntravel.net', exterior: true },
      { src: scubaImage, buttonTitle: 'Excursion 4', to: '/forms/reservation', exterior: true },
      { src: scubaImage, buttonTitle: 'Excursion 5', to: '/forms/reservation', exterior: true }
    ]
    return (
      <div>
        <Banner imageUrl={skyDiveImage} heading='Excursions' alignment='center' position='top'/>
        <ImageBoxRow boxes={boxes1}/>
        <ImageBoxRow boxes={boxes2}/>
      </div>
    );
  }
}

export default Excursions;