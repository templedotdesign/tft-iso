//Core
import React, { Component } from 'react';

//Components
import Banner from '../../components/layout/banner/banner';
import CallToAction from '../../components/callToAction/callToAction';
import Column from '../../components/layout/column/column';
import Row from '../../components/layout/row/row';

//CSS
import classes from './familyTravel.css';

//Assets
import iceCreamImage from '../../assets/iceCream.png';
import princessesImage from '../../assets/princesses.png';
import elmoImage from '../../assets/elmo.png';

class FamilyTravel extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }
  render() {
    const buttons = [
      { buttonTitle: 'Contact Us', to: 'http://www.emailmeform.com/builder/form/3vZY2Ke2bfgz' }
    ];
    return (
      <div className={classes.familyTravel}>
        <Banner src={iceCreamImage} heading='Family Travel' alignment='center' position='right'/>
        <Row justification='space-around' alignment='flex-start'>
          <img src={princessesImage} alt='Disney Princesses'/>
          <Column>
            <p>
              What could be better than making memories with your family?   We plan family vacations and 
              multigenerational trips.  The ultimate family vacation that always comes to mind is a trip with 
              Disney!
            </p>
            <p>
              Our agency is an Authorized Disney Planner Agency, we have held this honor annually since 2014.  
              Our agents stay up to date with their annual Disney training, and we offer trips to Disney World, 
              Disneyland, Disney Cruise Line, and Adventures by Disney.
            </p>
            <p>
              Disney trips are multi-faceted and having a trained agent at your disposal can make all the 
              difference in a successful, enjoyable Disney vacation.  Dining plans, fast passes, and choosing 
              the right Disney fit for your family are what our agents do!
            </p>
          </Column>
        </Row>
        <p>
          Universal Studios is also a great domestic family vacation.  If you have Harry Potter fans in your 
          family, make sure you include Universal Studios on your next Florida trip!
        </p>
        <Row mobileReverse>
          <Column>
            <p>
              If an all-inclusive or island vacation is what your family is considering, we have many brands 
              that can meet your needs!  We work with Beaches Resorts located in Turks & Caicos and Jamaica.  
              Beaches is the family component of Sandals, and our agency is a Preferred Agency with the Sandals brand.
            </p>
            <p>
              We also have associations with Palace Resorts, located in Mexico and Jamaica, Azul & Nickelodeon 
              Brands in Mexico and Dominican Republic and Dreams Properties located throughout the Caribbean.   
              These are just a few of the brands we can work with to make your family getaway, a relaxing 
              enjoyable getaway that will provide memories to last a lifetime.  It is said that children long 
              forget a toy that they are given for a gift but long remember spending time together with their 
              families well into adulthood.
            </p>
          </Column>
          <img src={elmoImage} alt='Elmo'/>
        </Row>
        <CallToAction title='Make Some Memories' buttons={buttons} exterior vertical width='80%'/>
      </div>
    );
  }
}

export default FamilyTravel;
