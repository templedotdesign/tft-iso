//Core
import React, { Component } from 'react';

//Components
import Banner from '../../components/layout/banner/banner';
import ImageBox from '../../components/imageBox/imageBox';
import Row from '../../components/layout/row/row';
import Wrapper from '../../components/layout/wrapper/wrapper';

//Assets
import cancunImage from '../../assets/cancun.png';
import groupImage from '../../assets/group1.png';
import nashvilleImage from '../../assets/nashville.png';
import parisImage from '../../assets/paris.png';

class GroupTravel extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    return (
      <Wrapper>
        <Banner src={groupImage} heading='Group Travel' alignment='center'/>
        <Row justification='space-around' alignment='center'>
          <ImageBox src={parisImage} buttonTitle='Paris 2018' to='/group-travel/paris'/>
          <ImageBox src={nashvilleImage} buttonTitle='Nashville 2018' to='/group-travel/nashville'/>
          <ImageBox src={cancunImage} buttonTitle='Beach Palace Cancun 2019' to='/group-travel/cancun'/>
        </Row>
      </Wrapper>
    );
  }
}

export default GroupTravel;