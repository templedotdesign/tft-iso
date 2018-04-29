//Core
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Agents from '../../routes/agents/agents';
import Cancun from '../../routes/groupTravel/cancun/cancun'
import Dena from '../../routes/agents/dena/dena';
import Diane from '../../routes/agents/diane/diane';
import FamilyTravel from '../../routes/familyTravel/familyTravel';
import FeaturedTrips from '../../routes/featuredTrips/featuredTrips';
import Forms from '../../routes/forms/forms';
import Germany from '../../routes/featuredTrips/germany/germany';
import GroupTravel from '../../routes/groupTravel/groupTravel';
import Hawaii from '../../routes/featuredTrips/hawaii/hawaii';
import Home from '../../routes/home/home';
import Juli from '../../routes/agents/juli/juli';
import Julie from '../../routes/agents/julie/julie';
import Layout from '../layout/layout';
import Laura from '../../routes/agents/laura/laura';
import Lisa from '../../routes/agents/lisa/lisa';
import Marcy from '../../routes/agents/marcy/marcy';
import Michele from '../../routes/agents/michele/michele';
import Nashville from '../../routes/groupTravel/nashville/nashville';
import NotFound from '../../routes/notFound/notFound';
import Paris from '../../routes/groupTravel/paris/paris';
import Payment from '../../routes/forms/payment/payment';
import Quote from '../../routes/forms/quote/quote';
import Reservation from '../../routes/forms/reservation/reservation';
import Robert from '../../routes/agents/robert/robert';
import Rose from '../../routes/featuredTrips/rose/rose';
import Seaside from '../../routes/featuredTrips/seaside/seaside';
import Stephanie from '../../routes/agents/stephanie/stephanie';
import Tammy from '../../routes/agents/tammy/tammy';
import Terms from '../../routes/forms/terms/terms';
// import Testing from '../testing/testing';

//Assets
import logo from '../../assets/tftlogo.png';

const app = () => {
  return (
    <BrowserRouter>
      <Layout logo={logo}>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/forms' component={Forms} exact/>
          <Route path='/forms/quote' component={Quote} exact/>
          <Route path='/forms/reservation' component={Reservation} exact/>
          <Route path='/forms/payment' component={Payment} exact/>
          <Route path='/group-travel' component={GroupTravel} exact/>
          <Route path='/group-travel/paris' component={Paris} exact/>
          <Route path='/group-travel/nashville' component={Nashville} exact/>
          <Route path='/group-travel/cancun' component={Cancun} exact/>
          <Route path='/family-travel' component={FamilyTravel} exact/>
          <Route path='/featured-trips' component={FeaturedTrips} exact/>
          <Route path='/featured-trips/germany' component={Germany} exact/>
          <Route path='/featured-trips/hawaii' component={Hawaii} exact/>
          <Route path='/featured-trips/rose-parade' component={Rose} exact/>
          <Route path='/featured-trips/seaside' component={Seaside} exact/>
          <Route path='/agents' component={Agents} exact/>
          <Route path='/agents/dena' component={Dena} exact/>
          <Route path='/agents/diane' component={Diane} exact/>
          <Route path='/agents/juli' component={Juli} exact/>
          <Route path='/agents/julie' component={Julie} exact/>
          <Route path='/agents/laura' component={Laura} exact/>
          <Route path='/agents/lisa' component={Lisa} exact/>
          <Route path='/agents/marcy' component={Marcy} exact/>
          <Route path='/agents/michele' component={Michele} exact/>
          <Route path='/agents/robert' component={Robert} exact/>
          <Route path='/agents/stephanie' component={Stephanie} exact/>
          <Route path='/agents/tammy' component={Tammy} exact/>
          <Route path='/terms' component={Terms} exact/>
          {/* <Route path='/testing' component={Testing} exact/> */}
          <Route path='/*' component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default app;
