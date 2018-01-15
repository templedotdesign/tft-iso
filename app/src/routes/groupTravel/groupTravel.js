//Core
import React, { Component } from 'react';

//Components
import Banner from '../../components/banner/banner';
import ImageBox from '../../components/imageBox/imageBox';

//Assets
import groupImage from '../../assets/group.jpeg';
import parisImage from '../../assets/paris.jpeg';
import nashvilleImage from '../../assets/nashville.jpeg';
import cancunImage from '../../assets/cancun.jpeg';

class GroupTravel extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    let box1 = {src: parisImage, buttonTitle: 'Paris 2018', caption: '', to: '/group-travel/paris', exterior: false }
    let box2 = {src: nashvilleImage, buttonTitle: 'Nashville 2018', caption: '', to: '/group-travel/nashville', exterior: false }
    let box3 = {src: cancunImage, buttonTitle: 'Beach Palace Cancun 2019', caption: '', to: '/group-travel/cancun', exterior: false }
    return (
      <div>
        <Banner imageUrl={groupImage} heading='Group Travel' alignment='center'/>
        <div style={{margin: '0 auto', width: '50%', padding: '50px 0'}}>
          <ImageBox {...box1}/>
          <ImageBox {...box2}/>
          <ImageBox {...box3}/>
        </div>
      </div>
    );
  }
}

export default GroupTravel;