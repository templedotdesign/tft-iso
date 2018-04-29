//Core
import React, { Component } from 'react';

//Components
import Wrapper from '../../../components/layout/wrapper/wrapper';
import Heading from '../../../components/layout/heading/heading';
import ImageBox from '../../../components/imageBox/imageBox';
import CallToAction from '../../../components/callToAction/callToAction';

//CSS
import classes from './germany.css';

//Assets
import passionImg from '../../../assets/passionplay.jpg';

class Germany extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    const buttons = [
      { buttonTitle: 'Quote Request', to: '/forms/quote'}
    ];
    return (
      <Wrapper>
        <Heading heading='Oberammergau & The Sound Of Music, 2020'/>
        <div className={classes.germany}>
          <p>
            Combine the once-in-a-lifetime experience of the Oberammergau Passion Play with a fairytale tour of 
            Bavaria and Austria. This journey takes you to the fairytale Castle of Neuschwanstein, the beautiful Alps, a 
            “Sound of Music” experience in Salzburg and finally through the Imperial history of Europe in Vienna. 
            Stories of princesses, queens, princes and kings included!
          </p>
          <ImageBox src={passionImg} caption='The Oberammergau Passion Play' alt='passion play' fontSize='1.7rem' noLink/>
          <div style={{textAlign: 'center'}}>
            <h2>The Oberammergau Passion Play Only Occurs Once Every Ten Years And Your Tour Begins July 12, 2020!</h2>
            <h4>This is an extremely popular itinerary and will sell out quickly!</h4>
            <h4>Price Per Person: $2798</h4>
            <p>Pricing does NOT include airfare.</p>
          </div>
          <CallToAction title='Request A Quote Today!' buttons={buttons} vertical/>
          <p>
            <span>Day 1 - Depart for Munich, Germany.</span>  Your adventure begins as you depart for Munich, Germany.
          </p>
          <p>
            <span>Day 2 - Arrive in Munich, Germany.</span>  Arrive in magical Munich, the largest city in 
            Bavaria, to begin your tour.  In the evening, you will meet your fellow travelers at a welcome 
            dinner at the hotel. (D)<br/>
            ✦ Ferringapark or similar
          </p>
          <p>
            <span>Day 3 - Munich, Germany.</span>  Wake up and enjoy a complimentary breakfast in the hotel. 
            After your meal, you will be taken on a city tour of Munich. Explore the beauty of this Bavarian 
            city, which possesses old world charm and a modern cosmopolitan vibe. See the lush ‘Englischer 
            Garten’, the grand Marienplatz, and the sprawling Viktualienmarkt. Enjoy the hefty and hardy 
            Bavarian cuisine, the classically grand architecture, or maybe even a traditional Bavarian beer. (B)<br/>
            ✦ Ferringapark or similar
          </p>
          <p>
            <span>Day 4 - Munich and Oberammergau Area.</span>  Today you will live a real life fairytale. 
            This morning we will set out to see the world famous Neuschwanstein Castle, nestled in the Bavarian 
            Alps. This castle of dreams was the inspiration for Disney’s Sleepy Beauty Castle and it’s easy 
            to see why. As you walk through the enchanted halls, you will notice the beautiful art that covers 
            the castle’s interiors and tells stories of 19th century life in Germany. Enjoy the beautiful 
            scenery that surrounds the palace and admire the luxurious and intricate decor and architecture. 
            Following your happily ever after tour, we will travel to the Oberammergau area where the evening 
            will be at your leisure. (B, D)<br/>
            ✦ Hotel name will be announced in 2019
          </p>
          <p>
            <span>Day 5 - Oberammergau Area.</span>  Wake up in the beautiful mountain area of Bavaria, close 
            to or in Oberammergau (hotels to be confirmed in 2019) and prepare to enjoy the longest running 
            Passion Play in the world. For over 380 years, the inhabitants of Oberammergau have told the story 
            of the suffering, death, and resurrection of Christ. Enjoy the power and inspiration of this 2,000 
            person production, the largest amateur dramatic performance in the world, and become part of this 
            long-running tradition of devotion. The 5.5-hour play is divided into two parts, with a break and 
            included dinner in between. (B, D)<br/>
            ✦ Hotel name will be announced in 2019
          </p>
          <p>
            <span>Day 6 - Oberammergau and Salzburg.</span>  Today we leave Oberammergau and travel to charming 
            and magical Austria. First, we will visit Linderhof Palace, built by King Ludwig II of Bavaria and 
            modeled after Versailles to be a smaller version of the iconic French royal residence. We will 
            continue to Prien am Chiemsee for lunch at your leisure before boarding a ferry to Herrenchiemsee 
            New Palace, known as the “Bavarian Versailles” and another of King Ludwig II’s creations. See the 
            large staterooms and decadent staircases, peek into the bedrooms and Great Hall, and be transported 
            back in time. After the palace tour you will continue to Salzburg in Austria for dinner and leisure 
            time. (B, D)<br/>
            ✦ Austria Trend Europa or similar
          </p>
          <p>
            <span>Day 7 - Salzburg.</span>  This morning you will awake in Salzburg, surrounded by the scenic 
            Alps Mountains. Enjoy a full day touring the sights and buildings of this romantic and culturally 
            rich city. Visit the locations from the classic lm The Sound of Music and the birthplace of Mozart 
            located in the city center. As you walk through Salzburg’s old town, you will feel at home as many 
            of The Sound of Music scenes were filmed here, including the Mozart Footbridge where the children 
            sang Do-Re-Mi, and the Residenzplatz. Enjoy dinner and your evening at your leisure. (B)<br/>
            ✦ Austria Trend Europa or similar
          </p>
          <p>
            <span>Day 8 - Salzburg, Mondsee, and Vienna.</span>  This morning you will leave Salzburg and 
            travel to the town of Mondsee, located on the shore of Lake Mondsee and home to the medieval 
            Mondsee Chapel, which was famously used in The Sound of Music wedding scene. We will then leave 
            the Abbey and travel to Vienna, where you will have an included dinner at the hotel with your 
            fellow travelers. (B, D)<br/>
            ✦ Senator Hotel or similar
          </p>
          <p>
            <span>Day 9 - Vienna.</span>  Spend today in beautiful Vienna, Austria’s capital city. Explore the 
            cobbled lanes, cafes, and awe-inspiring architecture. Soak up the grandeur of the St. Stephen’s 
            Cathedral, the ornate State Opera house, and the quirky design of the Hundertwasserhaus. Learn 
            about the Habsburg monarchy as you marvel at the Imperial Palace. The remainder of the afternoon 
            and evening will be at your leisure as the music and magic of Austria surrounds you. A trip to 
            Hotel Sacher to try the famous “Sacher Torte,” a special type of chocolate cake, is highly 
            recommended! (B)<br/>
            ✦ Senator Hotel or similar
          </p>
          <p>
            <span>Day 10 - Depart for Home.</span>  Your adventure is concluded as you depart for home. (B)
          </p>
        </div>
      </Wrapper>
    );
  }
}

export default Germany;