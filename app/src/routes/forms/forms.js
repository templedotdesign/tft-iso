//Core
import React, { Component } from 'react';

//Components
import Banner from '../../components/layout/banner/banner';
import ImageBox from '../../components/imageBox/imageBox';
import Row from '../../components/layout/row/row';
import Wrapper from '../../components/layout/wrapper/wrapper';

//Assets
import deskImage from '../../assets/desk.png';
import moneyImage from '../../assets/money.png';
import passportImage from '../../assets/passport.png';
import surveyImage from '../../assets/survey.png';
import ticketsImage from '../../assets/tickets.png';

class Forms extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    return (
      <Wrapper>
        <Banner heading='Forms' src={deskImage} alignment='center'/>
        <Row justification='space-around' alignment='center'>
          <ImageBox src={ticketsImage} buttonTitle='Reservation Form' to='/forms/reservation'/>
          <ImageBox src={moneyImage} buttonTitle='Payment Form' to='/forms/payment'/>
        </Row>
        <Row justification='space-around' alignment='center'>
          <ImageBox src={passportImage} buttonTitle='Passport Application' to='https://travel.state.gov/content/travel/en/passports/requirements/forms.html' exterior/>
          <ImageBox src={surveyImage} buttonTitle='Take Our Survey' to='https://www.emailmeform.com/builder/form/j02dnu97o4ed6lcST1XpA8dt' exterior/>
        </Row>
      </Wrapper>
    );
  }
}

export default Forms;