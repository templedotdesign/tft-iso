//Core
import React, { Component } from 'react';

//Components
import Banner from '../../components/layout/banner/banner';
import ImageBox from '../../components/imageBox/imageBox';
import Row from '../../components/layout/row/row';
import Wrapper from '../../components/layout/wrapper/wrapper';

//CSS
import classes from './agents.css';

//Assets
import agentsImage from '../../assets/team.png';
import bobImage from '../../assets/bob.png'
import stephImage from '../../assets/steph.png';
import lauraImage from '../../assets/laura.png';
import julieImage from '../../assets/julie.png';
import lisaImage from '../../assets/lisa.jpg';
import tammyImage from '../../assets/tammy.png';
import juliImage from '../../assets/juli.png';
//import marcyImage from '../../assets/marcy.png';
import dianeImage from '../../assets/diane.jpg';
import denaImage from '../../assets/dena.jpg';
import micheleImage from '../../assets/michele.jpg';

class Agents extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Wrapper>
        <Banner heading='Meet Our Agents' src={agentsImage} alignment='flex-end' position='center'/>
        <Row justification='space-around' alignment='center'>
          <ImageBox src={stephImage} buttonTitle='Stephanie Temple' to='/agents/stephanie' style={{borderRadius: '50%'}}/>
          <ImageBox src={bobImage} buttonTitle='Bob Temple' to='/agents/robert' style={{borderRadius: '50%'}}/>
        </Row>
        <div className={classes.agents}>
          <Row justification='space-around' alignment='center'>
            <ImageBox src={julieImage} buttonTitle='Julie Kimmel' to='/agents/julie' style={{borderRadius: '50%'}}/>
            {/* <ImageBox src={marcyImage} buttonTitle='Marcy Roll' to='/agents/marcy' style={{borderRadius: '50%'}}/> */}
            <ImageBox src={lauraImage} buttonTitle='Laura &' buttonTitle2='Mike Bassitt' to='/agents/laura' style={{borderRadius: '50%'}}/>
            <ImageBox src={micheleImage} buttonTitle='Michele &' buttonTitle2='Todd Inskeep' to='/agents/michele' style={{borderRadius: '50%'}}/>            
          </Row>
          <Row justification='space-around' alignment='center'>
            {/* <ImageBox src={stephImage} buttonTitle='Shannon Allmon' to='/agents/shannon' style={{borderRadius: '50%'}}/> */}
            <ImageBox src={denaImage} buttonTitle='Dena &' buttonTitle2='John Bentz' to='/agents/dena' style={{borderRadius: '50%'}}/>
            <ImageBox src={juliImage} buttonTitle='Juli Maxon' to='/agents/juli' style={{borderRadius: '50%'}}/>
          </Row>
          <Row justification='space-around' alignment='center'>
            <ImageBox src={lisaImage} buttonTitle='Lisa Paulin' to='/agents/lisa' style={{borderRadius: '50%'}}/>
            
            {/* <ImageBox src={stephImage} buttonTitle='Aaron Condon' to='/agents/aaron' style={{borderRadius: '50%'}}/> */}
            <ImageBox src={dianeImage} buttonTitle='Diane Adams' to='/agents/diane' style={{borderRadius: '50%'}}/>
            {/* <ImageBox src={stephImage} buttonTitle='Stacy Gratz' to='/agents/stacy' style={{borderRadius: '50%'}}/> */}
            <ImageBox src={tammyImage} buttonTitle='Tammy Smith' to='/agents/tammy' style={{borderRadius: '50%'}}/>            
          </Row>
        </div>
      </Wrapper>
    );
  }
}

export default Agents;