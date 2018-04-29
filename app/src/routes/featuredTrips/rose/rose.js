//Core
import React, { Component } from 'react';

//Components
import Wrapper from '../../../components/layout/wrapper/wrapper';
import Heading from '../../../components/layout/heading/heading';
import ImageBox from '../../../components/imageBox/imageBox';
import CallToAction from '../../../components/callToAction/callToAction';

//CSS
import classes from './rose.css';

//Assets
import laImg from '../../../assets/la.jpeg';

class Rose extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }
  
  render() {
    const buttons = [
      { buttonTitle: 'Quote Request', to: '/forms/quote'}
    ];
    return (
      <Wrapper>
        <Heading heading='Rose Parade & Los Angeles Tour, 2018'/>
        <div className={classes.rose}>
          <p>
            Experience the spectacular 2019 Tournament of Roses Parade along with an insider perspective on the 
            famous parade by attending an exclusive evening viewing of the magnificent, hand-decorated floats. Next, 
            enjoy a tour of sunny Los Angeles. Tour the “City of Angels” and see the handprints of famous stars at 
            the Chinese Theatre, along with the Dolby Theatre where each year the Academy Awards take place (outside 
            viewing), Beverly Hills. Then travel to Pasadena to view the unforgettable spectacle of the 130th 
            Tournament of Roses Parade from your reserved grandstand seats. Includes 4 nights hotel accommodations, 
            official Rose Parade Program, YMT seat cushion, sightseeing, knowledgeable guides and porterage at hotels.
          </p>
          <ImageBox src={laImg} caption='The Los Angeles Skyline' alt='LA' fontSize='1.7rem' noLink/>
          <div style={{textAlign: 'center'}}>
              <h2>The Fun Begins Dec. 29, 2018!</h2>
              <h4>Price Per Person: $998!</h4>
              <h4>Prices do NOT include airfare.</h4>
          </div>
          <p>
            <span>Day 1 - Los Angeles.</span>  You will be welcomed by a representative, who will tell you all 
            about the exciting days ahead in an informative briefing. The afternoon is at leisure - you could 
            perhaps venture out into a nearby beach city for dinner and some shopping.<br/>
            ✦ Crowne Plaza Hotel LAX or similar
          </p>
          <p>
            <span>Day 2 - Los Angeles.</span>  This morning, you have the option to tour one of the major LA 
            area attractions such as the J. Paul Getty Museum, the Space Shuttle Endeavour or the Ronald Reagan 
            Presidential Library (additional cost). In the evening, the first highlight awaits: Enjoy an after 
            hours private float viewing at the Pasadena Rosemont Pavilion, and learn the history and 
            traditions of the Rose Parade at an exclusive event presented by the Tournament of Roses Committee. 
            This evening includes a casual dinner. (D)<br/>
            ✦ Crowne Plaza Hotel LAX or similar
          </p>
          <p>
            <span>Day 3 - Los Angeles.</span>  Tour Los Angeles and Hollywood, getting a glimpse into the many 
            sites within the “City of Angels.” Along the way, view the Music Center with the Walt Disney 
            Concert Hall, the Chinese Theatre, Dolby Theatre and the Hollywood Walk of Fame. Then visit the 
            famous Beverly Hills to see where the stars shop.<br/>
            ✦ Crowne Plaza Hotel LAX or similar
          </p>
          <p>
            <span>Day 4 - Pasadena.</span>  Enjoy the 130th Tournament of Roses Parade! Watch in wonder from 
            your reserved grandstand seats as the floats pass by, decorated with millions of colorful flowers 
            and ornaments. Listen to marching bands as they make their way down Colorado Boulevard. It’s an 
            overall thrilling spectacle!
            ✦ Crowne Plaza Hotel LAX or similar
          </p>
          <p>
            <span>Day 5 - Return Home.</span>  Today your vacation comes to an end, but you'll depart for home 
            with new friends and memories to reflect on for years to come!
          </p>
          <p>
            Please note that this is a proposed itinerary; the actual itinerary may vary due to season, special 
            events, or weather. Because our tour arrangements are often made a year or more in advance, we 
            reserve the right to alter the itinerary. Itinerary changes are made to improve your vacation 
            experience, as well as respond to any unforeseen circumstances that mandate alterations. By their 
            nature, all tours vacations involve a certain level of physical activity. While our tours have been 
            designed with our guests in mind and are not physically demanding, this tour does include walking 
            and periods of standing during the sightseeing visits. You will also encounter steps and some 
            uneven ground along the way, particularly at older, historical sights.
          </p>
          <CallToAction title='Request A Quote Today!' buttons={buttons} vertical/>
        </div>
      </Wrapper>
    );
  }
}

export default Rose;