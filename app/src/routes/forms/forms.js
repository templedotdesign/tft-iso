//Core
import React from 'react';

//Components
import Banner from '../../components/banner/banner';
import ImageBoxRow from '../../components/imageBoxRow/imageBoxRow';

//Assets
import deskImage from '../../assets/desk.jpeg';
import airplaneImage from '../../assets/airplane2.jpeg';
import moneyImage from '../../assets/money.jpg';
import passportImage from '../../assets/passport.jpeg';
import surveyImage from '../../assets/survey.jpeg';

const forms = (props) => {
  const row1 = [
    { src: airplaneImage, buttonTitle: 'Reservation Form', to: '/forms/reservation', exterior: false },
    { src: moneyImage, buttonTitle: 'Payment Form', to: '/forms/payment', exterior: false }
  ];
  const row2 = [
    { src: passportImage, buttonTitle: 'Passport Application', to: 'https://travel.state.gov/content/travel/en/passports/requirements/forms.html', exterior: true },
    { src: surveyImage, buttonTitle: 'Take Our Survey', to: 'https://www.emailmeform.com/builder/form/j02dnu97o4ed6lcST1XpA8dt', exterior: true }
  ]; 
  return (
    <div>
      <Banner heading='Forms' imageUrl={deskImage} alignment='center'/>
      <ImageBoxRow boxes={row1}/>
      <ImageBoxRow boxes={row2}/>
    </div>
  );
};

export default forms;