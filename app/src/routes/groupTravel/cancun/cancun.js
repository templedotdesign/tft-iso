//Core 
import React, { Component } from 'react';

//Components
import CallToAction from '../../../components/callToAction/callToAction';
import ImageBox from '../../../components/imageBox/imageBox';
import Heading from '../../../components/layout/heading/heading';
import Wrapper from '../../../components/layout/wrapper/wrapper';

//CSS
import classes from './cancun.css';

//Assets
import beachImage from '../../../assets/beachPalace.png';

class Cancun extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    const buttons = [
      {buttonTitle: 'Reservation Request', to: 'http://www.emailmeform.com/builder/form/WXuFA8bdOxwDgYp14'}
    ];
    return (
      <Wrapper>
        <Heading heading='Beach Palace Cancun, 2019'/>
        <div className={classes.cancun}>
          <h2>
            Having Tons of Fun in Cancun - February 2019! 
          </h2>
          <p>
            Curious about all inclusive resorts?  Would you like to see some of the bluest water in the world?  
            This is a great opportunity to join Bob & Stephanie Temple on this all inclusive adults getaway to 
            Cancun, Mexico.   This getaway is great for singles, couples, BFF's, and mancations.   You can plan 
            your stay from 3 to 10 nights, the Temples plan to stay for 5 nights, arriving in Cancun on February 3, 
            2019 and returning back on February 8, 2019.  The Temples recently visited this property in Mexico and 
            they loved it so much, they want to share it with you.  The photo shown here was taken by the Temples 
            last month, and the beach and water are really that beautiful!  $50 per person will hold your room 
            space.  Airfare will not be available until late March, 2018, when we will add it to the group.   Use 
            our convenient payment plan, to make payments that fit your budget.  Beach Palace is a family resort, 
            but based on our dates, we do not anticipate a large number of children to be on property.
          </p>
          <ImageBox src={beachImage} alt='beach palace' noLink/>
          <p><em>What's Included in our All Inclusive Stay at Beach Palace Cancun?</em></p>
          <ul>
            <li><em>Luxurious Accommodations</em></li>
            <li><em>Top Shelf Drinks</em></li>
            <li><em>Fine Dining</em></li>
            <li><em>Delicious Snacks & Room Service</em></li>
            <li><em>Free Wi-fi & Free Calls to the US from your room phone</em></li>
            <li><em>Exchange Privileges with Moon Palace with motor coach transportation between resorts</em></li>
          </ul>
          <p className={classes.p}>Palace Resorts vacations earn our clients, Resort Credit which can be redeemed for Spa, Golf, and Off Property Excursions.  Here's what you'll earn:</p>
          <ul>
            <li>3 night stay $500 per room</li>
            <li>4 night stay $750 per room</li>
            <li>5-8 night stays $1500 per room</li>
            <li>9-10 night stays $2000 per room</li>
          </ul>
          <p className={classes.small}>All used Resort Credit is subject to a 16% operational fee, which will be assessed at resort check out.</p>
          <hr/>
          <h3>Superior Deluxe Lagoon View (cost per person) room & transfers only</h3>
          <table>
            <tbody>
              <tr className={classes.tableTitle}>
                <td>Occupancy</td>
                <td>3 Nights</td>
                <td>4 Nights</td>
                <td>5 Nights</td>
                <td>6 Nights</td>
              </tr>
              <tr>
                <td>Single</td>
                <td>1541.28</td>
                <td>2047.37</td>
                <td>2553.46</td>
                <td>3059.55</td>
              </tr>
              <tr>
                <td>Double</td>
                <td>833.42</td>
                <td>1103.56</td>
                <td>1373.70</td>
                <td>1643.84</td>
              </tr>
              <tr>
                <td>Triple</td>
                <td>802.66</td>
                <td>1062.54</td>
                <td>1322.43</td>
                <td>1582.31</td>
              </tr>
              <tr>
                <td>Quad</td>
                <td>787.27</td>
                <td>1042.03</td>
                <td>1296.79</td>
                <td>1551.54</td>
              </tr>
            </tbody>
          </table>
          <h3>Superior Deluxe Ocean View (cost per person) room & transfers only</h3>
          <table>
            <tbody>
              <tr className={classes.tableTitle}>
                <td>Occupancy</td>
                <td>3 Nights</td>
                <td>4 Nights</td>
                <td>5 Nights</td>
                <td>6 Nights</td>
              </tr>
              <tr>
                <td>Single</td>
                <td>1609.67</td>
                <td>2138.56</td>
                <td>2667.44</td>
                <td>3196.33</td>
              </tr>
              <tr>
                <td>Double</td>
                <td>867.64</td>
                <td>1149.18</td>
                <td>1430.73</td>
                <td>1712.27</td>
              </tr>
              <tr>
                <td>Triple</td>
                <td>838.86</td>
                <td>1108.14</td>
                <td>1379.43</td>
                <td>1650.71</td>
              </tr>
              <tr>
                <td>Quad</td>
                <td>821.47</td>
                <td>1087.62</td>
                <td>1353.78</td>
                <td>1619.93</td>
              </tr>
            </tbody>
          </table>
          <CallToAction title='Reserve Your Spot Today!' buttons={buttons} exterior vertical/>
        </div>
      </Wrapper>
    );
  }
}

export default Cancun;