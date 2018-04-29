//Core
import React, { Component } from 'react';

//Components
import CallToAction from '../../../components/callToAction/callToAction';
import Wrapper from '../../../components/layout/wrapper/wrapper';
import Heading from '../../../components/layout/heading/heading';
import ImageBox from '../../../components/imageBox/imageBox';

//CSS
import classes from './hawaii.css';

//Assets
import waterfallImage from '../../../assets/waterfall.jpg';
import cruiseImage from '../../../assets/cruise.jpg';
import bayImage from '../../../assets/bay.jpg';
import memorialImage from '../../../assets/memorial.jpg'

class Hawaii extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }

  render() {
    const buttons = [
      { buttonTitle: 'Quote Request', to: '/forms/quote'}
    ];
    
    return (
      <Wrapper>
        <Heading heading='Pride Of America Hawaiian Cruise, 2019'/>
        <div className={classes.hawaii}>
          <ImageBox src={waterfallImage} caption='The Na Pali Coast' alt='waterfall' fontSize='1.7rem' noLink/>
          <h2>Visit Our Beautiful 50th State!</h2>
          <p>
            Your trip begins by flying to Honolulu on January 11, 2019 and staying overnight in a Waikiki hotel.  The next 
            day you will transfer to the Norwegian Cruise Line's Pride Of America, where you will spend the next 7 days 
            cruising around Hawaii.  
          </p>
          <p>
            You will visit Maui, Big Island of Hawaii, and Kauai before returning to Oahu.  Then you will visit Pearl Harbor 
            and the USS Arizona Memorial, and then spend 3 nights in Honolulu before departing for home.  
          </p>
          <p>
            On this itinerary, you will sail from Honolulu on Saturday afternoon, when you awake on Sunday, you will be on Maui, 
            where you will spend 2 days.  Tuesday and Wednesday you will be on Big Island, first in Hilo and then in Kona.  By 
            Thursday morning you will be on Kauai where you will spend 2 days.  On Friday afternoon, you will sail overnight back to 
            Honolulu where you will spend three nights before heading home.
          </p>
          <ImageBox src={cruiseImage} caption="Norwegian Cruise Line's Pride Of America" alt='cruise ship' fontSize='1.7rem' noLink/>
          <h2>Ship Accommodations</h2>
          <p>
            <span>Inside Cabin -</span> This is a cabin that is located within the interior hallways of the ship.  There 
            are no exterior windows to the outside of the ship.  There may be a painting or other wall decoration that 
            appears to look like a window, but there is no actual window.  This is the most economical cabin choice.
          </p>
          <p>
            <span>Ocean View -</span> This cabin choice is located on the outside of the ship.  There is a window, that 
            could range from a porthole to a larger picture window.  This window, may be partially or fully obstructed 
            however, with part of the ships structure or lifeboats.  This is the second most economical cabin choice 
            available.
          </p>
          <p>
            <span>Balcony -</span> This cabin choice includes a balcony, where you can step out of your stateroom onto a 
            balcony to watch the stars at night as you sail from port to port.  It is also excellent for viewing The Na Pali 
            Coast on Kauai after setting sail from that island on the way back to Oahu. 
          </p>
          <div style={{textAlign: 'center'}}>
            <h3>Price Per Person</h3>
            <p>Inside Stateroom - $3998</p>
            <p>Ocean View Stateroom - $5098</p>
            <p>Balcony Stateroom - $5998</p>
            <h3 style={{fontSize: '3rem'}}>Buy One Get One Free!!!!</h3>
            <p><span>Book Your Cabin And Pay Your Deposit Of $250 Per Person By <del>March 31, 2018</del> to qualify!</span></p>
            <p><span style={{color: 'red'}}>Promotion Extended For A Limited Time!</span></p>
            <h3>Making The Price Per Person</h3>
            <p>Inside Stateroom - $1999</p>
            <p>Ocean View Stateroom - $2549</p>
            <p>Balcony Stateroom - $2999</p>
            <p style={{fontSize: '1.2rem'}}>Prices Do NOT Include Airfare Or Taxes Of $299 Per Person</p>
          </div>
          <ImageBox src={bayImage} caption='Waikiki Beach And Diamond Head' alt='hotel by the bay' fontSize='1.7rem' noLink/>
          <CallToAction title='Request A Quote Today!' buttons={buttons} vertical/>
          <p>
            <span>Day 1 Fly To Hawaii.</span>  Guests arriving in Honolulu who have made their flight arrangements
            with YMT Vacations, please meet your YMT representative in the baggage claim area for a warm aloha
            welcome with a beautiful flower lei, and transfer to the hotel.  Doubletree Alana Waikiki or similar.
          </p>
          <p>
            <span>Day 2 Board Norwegian Cruise Line's Pride Of America.</span>  On your first morning in Hawaii,
            you'll have a Guest Welcome meeting at the hotel, during which your Tour Director will tell you all
            about the arrangements for the days ahead.  Later in the day, you'll travel the short distance to
            Honolulu Port to board Pride of America for the start of your Hawaiian Islands experience.  This
            vibrant, Americana-themed ship offers freestyle cruising and a variety of activities.  Whatever your
            pleasure, a warm and friendly crew is ready to assist you to make sure your cruise is just right.
          </p>
          <p>
            <span>Day 3 Kahului, Maui (8:00 AM - Overnight).</span>  Maui is the second largest of the Hawaiian Islands 
            and you will have almost two full days to explore!  Known as the "Valley Isle," this majestic island has
            three main peaks more than a mile high, thousands of breathtakingly beautiful waterfalls and pools, 120
            miles of shoreline and more than 80 golden beaches.  Highlights include Iao Valley, Haleakala Crater and 
            Lahaina, a traditional old whaling town, full of character, shops and restuarants.
          </p>
          <p>
            <span>Day 4 Kahului, Maui (Overnight - 6:00 PM).</span>  After your overnight stay in Maui, you may wish to 
            make the journey to the town of Hana.  Drive along the gorgeous winding coastal roads as you experience the
            natural wonder of Maui!  For beach lovers, visit the fabulous golden beaches of Kaanapali, where between the
            months of December and April each year you are almost guarenteed to see whales, without even leaving the beach.
          </p>
          <p>
            <span>Day 5 Hilo, Hawaii (7:00 AM - 5:30 PM).</span>  Brimming with Hawaiian tradition, Hilo takes you back to an
            earlier island culture.  The town will charm you with its quaint buildings and unique shopping.  Hilo is the 
            flower capital of Hawaii, and gardens and blossoms are everywhere.  This is truly a special stop on your cruise - 
            take the opportunity to visit Volcanoes National Park, a UNESCO World Heritage Site.  Here you will see a real, 
            smoking and steaming volcano as you look out across the Kilauea Caldera.  Thurston's Lava Tube is another rare
            experience, where else will you get to walk through a tunnel formed by molten rock?
          </p>
          <p>
            <span>Day 6 Kona, Hawaii (7:00 AM - 5:30 PM).</span>  Welcome to Kona!  Spend your day exploring the "Gold Coast"
            in a wide variety of ways - riding in a horse-drawn carriage, skimming the seas in a glass bottom boat, snorkeling
            below the waves.  If you prefer to keep your feet on dry land, you may choose to take a leisurely walking tour through
            historic Kailua Village or one of the many island coffee plantations.
          </p>
          <p>
            <span>Day 7 Nawiliwili, Kauai (8:00 AM - Overnight).</span>  This verdant little isle exudes peace and tranquility.  
            Nature has been good to Kauai, creating craters, mountains, rivers, canyons and glorious streches of palm-fringed 
            beaches.  Nicknamed the "Garden Island" Kauai is the least populated and developed of the four main islands.  The
            island's spectacular scenery including canyons, cliffs and waterfalls make it a firm favorite to take a helicopter 
            flight-seeing tour of a lifetime!  
          </p>
          <p>
            <span>Day 8 Nawiliwili, Kauai And The Na Pali Coast (Overnight - 2:00 PM).</span>  It's no wonder that an impressive
            list of Hollywood productions have used this emerald island as a setting.  The Na Pali Coast, featured in the film 
            Jurassic Park and many other movies, is one of the most distinctive geological features of Kauai.  Kauai is famous 
            for Waimea Canyon, known as the Grand Canyon of the Pacific.
          </p>
          <p>
            <span>Day 9 Disembark From The Cruise Ship (7:00 AM).</span>  This morning you will go on the most popular tour in 
            Hawaii - the included Pearl Harbor and Honolulu city tour.  You'll head first to Pearl Harbor where you'll take a 
            Navy launch out to the USS Arizona Memorial.  Explore the visitor center, view the 23-minute film and see the USS 
            Bowfin submarine before you head off to see the sights of Honolulu.  Set in a real dormant volcano, you'll visit 
            Punchbowl Crater, home of the National Cemetery of the Pacific, before continuing onto downtown Honolulu.  You will 
            see the State Capitol and Iolani Palace.  Doubletree Alana Waikiki or similar.  
          </p>
          <ImageBox src={memorialImage} caption="USS Arizona Memorial" alt='USS Arizona Memorial' fontSize='1.7rem' noLink/>
          <p>
            <span>Day 10 Oahu.</span>  Leisure day - you're back in Oahu and these days are yours to do as you wish.  Your Tour 
            Director has arranged a variety of popular optional tours.  Whatever you do, you'll have plenty of time to enjoy the 
            famous Waikiki beach and shopping on Kalakaua Avenue.  Doubletree Alana Waikiki or similar.
          </p>
          <p>
            <span>Day 11 Oahu.</span>  Leisure day - during your stay in Waikiki, why not visit the Hawaii Army Museum, a museum 
            that tells the military story of Hawaii, from ancient times to the Gulf War and the War in Iraq.  Admission is free.
            Doubletree Alana Waikiki or similar.
          </p>
          <p>
            <span>Day 12 Depart For Home.</span>  Transfer to Honolulu airport for your flight home.  If you are on a later 
            departing flight from Honolulu, we do offer an optional Island Tour to show you Oahu's highlights before returning
            you to the airport.
          </p>
          <p>
            The above prices are for cruise and land tour only.  Airfare to Hawaii is additional.  You may purchase your air 
            transportation through our vendor, or if you have credit card benefits to use or frequent benefits to use you 
            certainly may take care of your air arrangements on your own.
          </p>
          <p>
            If you purchase your air arrangements through our vendor, then transfers to and from the airport are included, as well 
            as the orchid flower lei greeting upon arrival in Honolulu airport.  These items come to about a $60 per person value.
          </p>
          <p>
            Optional travel insurance is available.  In order to cover pre-existing medical conditions, this coverage must be 
            purchased within 21 days of making the trip deposit.
          </p>
          <p>
            Deposit for this is $250 per person.  A second payment of $250 per person is due 6 months prior to tour onset date.  
            Final payment is due 90 days prior to tour onset.  Anyone may make additional, intermediate payments at any time.
          </p>
          <p>
            <span>
              Space is limited.  No space is being held.  This is a popular itinerary, and likely to sell out.  Space available 
              is on a first come, first served basis.
            </span>
          </p>
          <p>
            For additional information or if you have questions contact us below.
          </p>
          <CallToAction title='Request A Quote Today!' buttons={buttons} vertical/>
        </div>
      </Wrapper>
    );
  }
}

export default Hawaii;