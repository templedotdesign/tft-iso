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
      { buttonTitle: 'Go To Disney', to: 'https://www.disneytravelcenter.com/ms6f1ddcfc/' }
    ];
    return (
      <div className={classes.familyTravel}>
        <Banner src={iceCreamImage} heading='Family Travel' alignment='center'/>
        <Row justification='space-around' alignment='flex-start'>
          <img src={princessesImage} alt='Disney Princesses'/>
          <Column>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus nulla et ex maximus lobortis. 
              Ut non bibendum elit. Maecenas molestie erat ex, imperdiet scelerisque augue sagittis quis. Ut vitae 
              turpis ornare, consequat quam luctus, sodales elit. Integer eleifend dictum nibh laoreet viverra. 
              Proin feugiat tellus vitae libero aliquet, id porttitor eros pellentesque. Morbi quis lobortis 
              dolor. Nam vulputate molestie turpis, non cursus odio venenatis placerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus nulla et ex maximus lobortis. 
              Ut non bibendum elit. Maecenas molestie erat ex, imperdiet scelerisque augue sagittis quis. Ut vitae 
              turpis ornare, consequat quam luctus, sodales elit. Integer eleifend dictum nibh laoreet viverra. 
              Proin feugiat tellus vitae libero aliquet, id porttitor eros pellentesque. Morbi quis lobortis 
              dolor. Nam vulputate molestie turpis, non cursus odio venenatis placerat.
            </p>
          </Column>
        </Row>
        <Row mobileReverse>
          <Column>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus nulla et ex maximus lobortis. 
              Ut non bibendum elit. Maecenas molestie erat ex, imperdiet scelerisque augue sagittis quis. Ut vitae 
              turpis ornare, consequat quam luctus, sodales elit. Integer eleifend dictum nibh laoreet viverra. 
              Proin feugiat tellus vitae libero aliquet, id porttitor eros pellentesque. Morbi quis lobortis 
              dolor. Nam vulputate molestie turpis, non cursus odio venenatis placerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus nulla et ex maximus lobortis. 
              Ut non bibendum elit. Maecenas molestie erat ex, imperdiet scelerisque augue sagittis quis. Ut vitae 
              turpis ornare, consequat quam luctus, sodales elit. Integer eleifend dictum nibh laoreet viverra. 
              Proin feugiat tellus vitae libero aliquet, id porttitor eros pellentesque. Morbi quis lobortis 
              dolor. Nam vulputate molestie turpis, non cursus odio venenatis placerat.
            </p>
          </Column>
          <img src={elmoImage} alt='Elmo'/>
        </Row>
        <CallToAction title='Make Some Memories' buttons={buttons} exterior vertical/>
      </div>
    );
  }
}

export default FamilyTravel;
