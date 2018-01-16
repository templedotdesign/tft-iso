//Core
import React, { Component } from 'react';

//Components
import Banner from '../../components/layout/banner/banner';
import ImageBox from '../../components/imageBox/imageBox';
import Row from '../../components/layout/row/row';
import Wrapper from '../../components/layout/wrapper/wrapper';

//Assets
import scubaImage from '../../assets/scuba.jpeg';
import skyDiveImage from '../../assets/skydiving.jpg';

class Excursions extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    return (
      <Wrapper>
        <Banner src={skyDiveImage} heading='Excursions' alignment='center' position='top'/>
        <Row justification='space-around' alignment='center'>
          <ImageBox src={scubaImage} buttonTitle='Tour Sales' to='http://www.toursales.com/Default.asp?Click=127156' exterior/>
          <ImageBox src={scubaImage} buttonTitle='Island Routes' to='http://www.islandroutes.com/?referral=D82FAD1C&agent_id=33972' exterior/>
        </Row>
        <Row justification='space-around' alignment='center'>
          <ImageBox src={scubaImage} buttonTitle='Shore Excursions' to='https://www.shoreexcursionsgroup.com/?&id=298810&data=stephanie%40tonsoffuntravel.net' exterior/>
          <ImageBox src={scubaImage} buttonTitle='Excursion 4' to='/forms/reservation' exterior/>
          <ImageBox src={scubaImage} buttonTitle='Excursion 5' to='/forms/reservation' exterior/>
        </Row>
      </Wrapper>
    );
  }
}

export default Excursions;