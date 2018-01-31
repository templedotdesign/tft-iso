//Core
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Agents from '../../routes/agents/agents';
import Cancun from '../../routes/groupTravel/cancun/cancun'
import Diane from '../../routes/agents/diane/diane';
import FamilyTravel from '../../routes/familyTravel/familyTravel';
import Forms from '../../routes/forms/forms';
import GroupTravel from '../../routes/groupTravel/groupTravel';
import Home from '../../routes/home/home';
import Juli from '../../routes/agents/juli/juli';
import Julie from '../../routes/agents/julie/julie';
import Layout from '../layout/layout';
import Laura from '../../routes/agents/laura/laura';
import Lisa from '../../routes/agents/lisa/lisa';
import Marcy from '../../routes/agents/marcy/marcy';
import Nashville from '../../routes/groupTravel/nashville/nashville';
import NotFound from '../../routes/notFound/notFound';
import Paris from '../../routes/groupTravel/paris/paris';
import Payment from '../../routes/forms/payment/payment';
import Reservation from '../../routes/forms/reservation/reservation';
import Robert from '../../routes/agents/robert/robert';
import Stephanie from '../../routes/agents/stephanie/stephanie';
import Tammy from '../../routes/agents/tammy/tammy';
import Terms from '../../routes/forms/terms/terms';

//Assets
import logo from '../../assets/tftlogo.png';

//Constants
import { YEARS } from '../../constants/reservationForm/reservationForm';

const app = () => {
  return (
    <BrowserRouter>
      <Layout logo={logo}>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/forms' component={Forms} exact/>
          <Route path='/forms/reservation' component={Reservation} exact/>
          <Route path='/forms/payment' component={Payment} exact/>
          <Route path='/group-travel' component={GroupTravel} exact/>
          <Route path='/group-travel/paris' component={Paris} exact/>
          <Route path='/group-travel/nashville' component={Nashville} exact/>
          <Route path='/group-travel/cancun' component={Cancun} exact/>
          <Route path='/family-travel' component={FamilyTravel} exact/>
          <Route path='/agents' component={Agents} exact/>
          <Route path='/agents/diane' component={Diane} exact/>
          <Route path='/agents/juli' component={Juli} exact/>
          <Route path='/agents/julie' component={Julie} exact/>
          <Route path='/agents/laura' component={Laura} exact/>
          <Route path='/agents/lisa' component={Lisa} exact/>
          <Route path='/agents/marcy' component={Marcy} exact/>
          <Route path='/agents/robert' component={Robert} exact/>
          <Route path='/agents/stephanie' component={Stephanie} exact/>
          <Route path='/agents/tammy' component={Tammy} exact/>
          <Route path='/terms' component={Terms} exact/>
          <Route path='/*' component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default app;
