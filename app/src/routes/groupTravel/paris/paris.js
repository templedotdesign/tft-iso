//Core 
import React, { Component } from 'react';

//Components
import CallToAction from '../../../components/callToAction/callToAction'
import Heading from '../../../components/layout/heading/heading';
import ImageBox from '../../../components/imageBox/imageBox';
import Wrapper from '../../../components/layout/wrapper/wrapper';

//CSS
import classes from './paris.css'

//Assets
import riverImage from '../../../assets/river.jpeg';
import parisImage from '../../../assets/paris2.jpeg';
import mapImage from '../../../assets/cruiseMap.jpeg';


class Paris extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    const buttons = [
      { buttonTitle: 'Reservation Request', to: 'http://www.emailmeform.com/builder/form/4ta9mWil5qQds1b8'}
    ];
    return (
      <Wrapper>
        <Heading heading='Paris, 2018'/>
        <div className={classes.paris}>
          <h3 style={{textAlign: 'center'}}>
            Join Bob & Stephanie Temple on our Group River Cruise 2018 France with Avalon Waterways
          </h3>
          <ImageBox src={riverImage} caption='July 14-21, 2018, 8 Day River Cruise Paris-Paris Itinerary' alt='river' style={{width: '50%'}} fontSize='1.7rem' noLink/>
          <p>
            The long awaited, European River Cruise. Avalon Waterways, Paris to Normandy, 8 Day River Cruise from 
            Paris to Paris. Departing Paris July 14, 2018 return date of July 21, 2018. Cost is $2,149 per person, 
            (cruise cost only) for the base cabin. 
          </p>
          <p>
            Upgrades to Panorama and Royal Suites are available. This cost is $1,000 per person off of the 
            brochure listed rate. $250 per person deposit must be made by April 4, 2017 to secure this rate. 
            Deposit by this date, also gives you pre-paid gratuities, and 2 drink coupons per person. 
            Insurance is available.
          </p>
          <p>
            If you are a Globus Journey's member, you will receive an additional 5% off of the cabin cost. Watch 
            here for additional information. At this discounted rate, we think the demand will be very high, don't 
            miss out!  Contact us today for a detailed quote.
          </p>
          <CallToAction title='Ready To See Paris?' buttons={buttons} exterior vertical/>
          <ImageBox src={parisImage} caption='Go for the Sights' alt='paris' style={{width: '50%'}} fontSize='1.7rem' noLink/>
          <p>
            This fabulous river cruise combines time in France’s unparalleled capital of Paris with beautiful 
            scenery along the Seine River and the picturesque and historical region of Normandy.  Embark on your 
            adventure in Paris and sail to Vernon, where you’ll choose between two exciting guided visits—Claude 
            Monet’s stunning gardens at Giverny or the remarkable Bizy Castle, known as “Normandy’s Versailles”.
          </p>
          <p>
            You may choose to go on an excursion to the historic Normandy Landing Beaches, including Omaha Beach, 
            the Point du Hoc monument, and the American Cemetery. In Rouen, best known as the home of Joan of Arc, 
            you’ll go on a guided walk through the medieval quarter and visit the gothic Rouen Cathedral—once the 
            tallest building in the world. 
          </p>
          <p>
            From Conflans, go on an excursion to the quaint and inspiring town of Auvers-Sur-Oise—associated with 
            several famous artists, including Vincent Van Gogh—or visit Napoleon and Josephine’s Malmaison.  On 
            this French river cruise, you’ll enjoy wine, cheese, beautiful scenery along the Seine River, and 
            stops in charming and historical parts of France, but your adventure would not be complete without 
            some time in Paris—one of the world’s most romantic and vibrant cities!
          </p>
          <p>
            The “City of Light” has Notre Dame Cathedral, the Eiffel Tower, and the Louvre Museum with its elegant 
            glass pyramid contrasting its ancient architecture. A guided walk through the historic Île St. Louis 
            with its narrow streets, and Île de la Cité where medieval Paris was founded, will be a delight.
          </p>
          <ImageBox src={mapImage} caption='Details' alt='cruise map' style={{width: '50%'}} fontSize='1.7rem' noLink/>
          <p>
            <span>Day 1 in Paris, France (Embarkation).</span>  Welcome to Paris, France’s capital on the Seine River, the “City 
            of Light,” where romance fills the air. This afternoon, board your river cruise vessel and meet your 
            crew at an evening welcome reception. Before dinner, your ship glides out of Paris.  NOTE:  Flights into 
            Paris must arrive by 2:30 pm. Guests must be on board ship by 5 pm.  Dinner included.
          </p>
          <p>
            <span>Day 2 Vernon–Les Andelys.</span>  This morning in Vernon, choose between a guided visit of Giverny and a visit 
            to Bizy Castle. Claude Monet lived at GIVERNY for almost 43 years (1883-1926), and viewed his flower and 
            water gardens as works of art—just like his paintings. See his collection of Japanese prints, his charming 
            house, and his biggest sources of inspiration. Or, visit BIZY CASTLE, built in 1740 and nicknamed 
            “Normandy’s Versailles.” It is known for its famous stables—inspired by those at Versailles—and its 
            magnificent courtyard and water garden. This afternoon, arrive in Les Andelys, situated on a bend of 
            the Seine and one of the most beautiful places in France. Join a Local Guide for a GUIDED WALK of the 
            town, visiting the PARISH CHURCH OF LE PETIT ANDELY. Alternatively, you may wish to join your guide on a 
            hike up to the ruins of imposing Château Gaillard, built by England’s King Richard the Lionheart as a 
            fortress in 1196. Constructed in only a year, it is a masterpiece of medieval military architecture.  
            Breakfast, Lunch, Dinner included.
          </p>
          <p>
            <span>Day 3 Caudebec.</span>  Today join a guided excursion along the “NORMANDY ABBEYS ROUTE,” a short drive from 
            Caudebec. More than 100 abbeys once covered this region, which has a microclimate suited to growing 
            fruit such as apples, pears, plums, and cherries. The afternoon is free to explore on your own or join 
            an optional excursion to the pretty coastal town of Honfleur.  Breakfast, Lunch, Dinner included
          </p>
          <p>
            <span>Day 4 Caudebec.</span>  Make your choice today between an included full-day excursion to the historic NORMANDY 
            LANDING BEACHES—with poignant sites such as Omaha Beach, the Pointe du Hoc monument, and the American 
            Cemetery—or a “TASTE OF NORMANDY” for an in-depth look at this picturesque, mainly agricultural region. 
            The most important products are dairy, apples, and grain. Camembert cheese is a specialty, as is CALVADOS, 
            a strong apple brandy you’ll have the chance to taste at a local distillery. And for a touch of history, 
            visit the famous BAYEUX TAPESTRY.  Breakfast, Lunch, Dinner included.
          </p>
          <p>
            <span>Day 5 Rouen.</span>  Rouen, capital of Upper Normandy, is an important commercial city perhaps best known for 
            its connection to Joan of Arc, who lived, was imprisoned, and burned at the stake in the marketplace of 
            this town in 1431. Enjoy the included GUIDED WALK through the medieval quarter with its half-timbered, 
            glazed-tile houses, and take photos of the intricate Gros Horloge astronomical clock, dating back to the 
            16th century. Visit the gothic CATHEDRAL, which was once the tallest building in the world and the 
            subject of a series of paintings by Claude Monet. The afternoon is free to explore on your own.  
            Breakfast, Lunch, Dinner Included.
          </p>
          <p>
            <span>Day 6 Conflans.</span>  After breakfast, you may either join our included guided excursion to AUVERS-SUR-OISE, 
            the quaint little town where Vincent Van Gogh lived and died, or to Napoleon and Josephine’s CHÂTEAU 
            DE MALMAISON just outside Paris. Requiring extensive renovations, this large country estate was 
            purchased by Josephine Bonaparte in 1799 while Napoleon was fighting in Egypt. It was her aim to make 
            it “the most beautiful and curious garden in Europe, a model of good cultivation.”  Breakfast, Lunch, 
            Dinner Included.
          </p>
          <p>
            <span>Day 7 Paris.</span>  Known as one of the world’s most romantic and lively cities, Paris delights the senses. 
            Join a GUIDED WALK through historic Île St. Louis with its narrow one-way streets and Île de la Cité, 
            the center of Paris where the medieval city was founded and home to NOTRE DAME CATHEDRAL. In your free 
            time, stroll down the Champs-Elysées with its lavish cafés, or perhaps visit the world-famous Louvre or 
            Montmartre with its gleaming white Sacré Coeur Basilica and bevy of artists on Place du Tertre.
            Breakfast, Lunch, Dinner included.
          </p>
          <p>
            <span>Day 8 Paris (Disembarkation).</span>  Your vacation ends with breakfast this morning.  Breakfast included.
          </p>
        </div>
      </Wrapper>
    );
  }
}

export default Paris;