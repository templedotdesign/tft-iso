//Core
import React, { Component } from 'react';

//Components
import Wrapper from '../../../components/layout/wrapper/wrapper';
import Heading from '../../../components/layout/heading/heading';
import ImageBox from '../../../components/imageBox/imageBox';
import CallToAction from '../../../components/callToAction/callToAction';

//CSS
import classes from './seaside.css';

//Assets
import swimUpImage from '../../../assets/swimup.jpg';
import oceanFrontImage from '../../../assets/oceanfront.jpg';

class Seaside extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }
  
  render() {
    const buttons = [
      {buttonTitle: 'Quote Request', to: '/forms/quote'}
    ];
    return (
      <Wrapper>
        <Heading heading='El Dorado Seaside Suites Resort, 2019'/>
        <div className={classes.seaside}>
          <ImageBox src={swimUpImage} alt='swim up balcony' noLink/>
          <p>
            192 beachfront suites. Miles of pristine coastline. Countless hidden spots just waiting to be 
            discovered. An air of romance amid swaying palm trees. This is Seaside Suites.
          </p>
          <p>
            An adults-only oasis in Riviera Maya located at Kantenah Bay, El Dorado Seaside Suites is mixture 
            of modern-architecture, luxury, and authentic Mexican service. Every part of the resort is designed 
            for a truly intimate experience.
          </p>
          <p>
            The moment you step into the breathtaking lobby you realize you’re in for something special. And the resort does not disappoint. 
            The exclusive Gourmet Inclusive Experience, delivers the best of Mexico to every guest throughout the 192 opulent beachfront 
            suites divided in two buildings, 10 specialty restaurants and nine bars. The beachfront terrace is not only spacious, but offers 
            some of the most beautiful views of the resort, making it great for weddings or private events. The Naay Spa is a place where you 
            can revitalize the mind, body and spirit with some of the greatest treatments offered in all of Riviera Maya.
          </p>
          <p>
            The amazing cuisine, the romantic atmosphere and the outstanding amenities all add up to a getaway unlike any other. And it’s 
            only at El Dorado Seaside Suites.
          </p>
          <ImageBox src={oceanFrontImage} alt='ocean front rooms' noLink/>
          <h2>Room Catagories</h2>
          <h3>Sensimar Luxury Jacuzzi Junior Suite</h3>
          <p>
            These charming suites feature king-sized or double beds, a separate living room area, and of course a Jacuzzi to relax in warm 
            bliss at any time of the day or night. Paired with classic décor with contemporary touches of design, these suites exude pure 
            romance and relaxation.
          </p>
          <p>Specifications & Amenities</p>
          <ul>
            <li>Room Size: 530 sq. ft.</li>
            <li>Maximum Occupancy: 2 guests</li>
            <li>Fan</li>
            <li>Cable / Satellite TV</li>
            <li>Terrace Or Balcony</li>
            <li>Phone Calls</li>
            <li>Iron & Ironing Board</li>
            <li>Hair Dryer</li>
            <li>DVD Player</li>
            <li>AM-FM Clock</li>
            <li>WiFi</li>
            <li>Vanity Mirror</li>
            <li>Smoke Detectors</li>
            <li>Safe Deposit Box</li>
            <li>Kettle / Tea</li>
            <li>Cotton Robes & Slippers</li>
            <li>Premium Bath Amenities</li>
            <li>Air Conditioning</li>
          </ul>
          <table>
            <tbody>
              <tr className={classes.tableTitle}>
                <td>Stay</td>
                <td>Single Occupancy</td>
                <td>Double Occupancy</td>
              </tr>
              <tr>
                <td>3 Nights</td>
                <td>$699</td>
                <td>$970</td>
              </tr>
              <tr>
                <td>4 Nights</td>
                <td>$917</td>
                <td>$1263</td>
              </tr>
              <tr>
                <td>5 Nights</td>
                <td>$1135</td>
                <td>$1557</td>
              </tr>
              <tr>
                <td>6 Nights</td>
                <td>$1353</td>
                <td>$1850</td>
              </tr>
              <tr>
                <td>7 Nights</td>
                <td>$1571</td>
                <td>$2143</td>
              </tr>
            </tbody>
          </table>
          <h3>Oceanfront Swim up Jacuzzi Junior Suite</h3>
          <p>
            The Oceanfront Infinity Pool Jacuzzi Suite offers classic sophistication and elegance with all of the modern amenities – 
            including a balcony infinity pool where you can cool down while enjoying the best views of the Caribbean. Rest easy in the king 
            size bed, unwind in the living area with a sofa, relax in the indoor Jacuzzi, and pamper yourself in the spacious bathroom with 
            double sink and glass enclosed showers. Every suite also comes with an oversized closet.
          </p>
          <p>Specifications & Amenities</p>
          <ul>
            <li>Room Size: 581.3 sq. ft.</li>
            <li>Terrace size: 111.9 sq. ft.</li>
            <li>Maximum Occupancy: 2 guests</li>
            <li>Smart TV</li>
            <li>Phone / Voicemail System</li>
            <li>Iron & Ironing Board</li>
            <li>Wakeup Call Service</li>
            <li>Hair Dryer</li>
            <li>Minibar</li>
            <li>Jacuzzi</li>
            <li>WiFi</li>
            <li>Vanity Mirror</li>
            <li>Safe Deposit Box</li>
            <li>Smart TV</li>
            <li>Kettle / Tea</li>
            <li>Smart TV</li>
            <li>Premium Cotton Bathrobes & Slippers</li>
            <li>Smart TV</li>
            <li>Balcony</li>
            <li>Bathroom Amenities</li>
            <li>Air Conditioning</li>
            <li>1 King Size Bed or 2 Double Beds</li>
          </ul>
          <table>
            <tbody>
              <tr className={classes.tableTitle}>
                <td>Stay</td>
                <td>Single Occupancy</td>
                <td>Double Occupancy</td>
              </tr>
              <tr>
                <td>3 Nights</td>
                <td>$775</td>
                <td>$1121</td>
              </tr>
              <tr>
                <td>4 Nights</td>
                <td>$1017</td>
                <td>$1464</td>
              </tr>
              <tr>
                <td>5 Nights</td>
                <td>$1261</td>
                <td>$1808</td>
              </tr>
              <tr>
                <td>6 Nights</td>
                <td>$1504</td>
                <td>$2151</td>
              </tr>
              <tr>
                <td>7 Nights</td>
                <td>$1747</td>
                <td>$2495</td>
              </tr>
            </tbody>
          </table>
          <h3>Sensimar Swim up Jacuzzi Junior Suite</h3>
          <p>
            Experience comfort and luxury all in one elegant suite. The Swim Up Jacuzzi Junior Suites feature direct access to a lazy river 
            that flows just beyond the suite’s terrace. Enjoy nature’s vibrant colors of the gardens that surround these suites, as well 
            quick access to the pool and swim up bar.
          </p>
          <p>Specifications & Amenities</p>
          <ul>
            <li>Room Size: 441 sq. ft.</li>
            <li>Maximum Occupancy: 2 guests</li>
            <li>Air Conditioning</li>
            <li>Bath Amenities</li>
            <li>Premium Cotton Robes & Slippers</li>
            <li>Kettle / Tea</li>
            <li>Safe Deposit Box</li>
            <li>Smoke Detectors</li>
            <li>Vanity Mirror</li>
            <li>WiFi</li>
            <li>Iron & Ironing Board</li>
            <li>AM-FM Clock</li>
            <li>DVD Player</li>
            <li>Hair Dryer</li>
            <li>Phone Calls</li>
            <li>Terrace Or Balcony</li>
            <li>Cable / Satellite TV</li>
          </ul>
          <table>
            <tbody>
              <tr className={classes.tableTitle}>
                <td>Stay</td>
                <td>Single Occupancy</td>
                <td>Double Occupancy</td>
              </tr>
              <tr>
                <td>3 Nights</td>
                <td>$826</td>
                <td>$1224</td>
              </tr>
              <tr>
                <td>4 Nights</td>
                <td>$1087</td>
                <td>$1602</td>
              </tr>
              <tr>
                <td>5 Nights</td>
                <td>$1347</td>
                <td>$1980</td>
              </tr>
              <tr>
                <td>6 Nights</td>
                <td>$1607</td>
                <td>$2358</td>
              </tr>
              <tr>
                <td>7 Nights</td>
                <td>$1867</td>
                <td>$2735</td>
              </tr>
            </tbody>
          </table>
          <p style={{textAlign: 'center'}}>The above prices are for Aug. 3 - 10 2019.  Room deposits are only $100.</p>
          <p style={{textAlign: 'center'}}>Payment plans are available!</p>
          <CallToAction title='Request A Quote Today!' buttons={buttons} vertical/>
        </div>
      </Wrapper>
    );
  }
}

export default Seaside;
