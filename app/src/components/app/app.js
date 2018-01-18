//Core
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Agent from '../../routes/agents/agent/agent';
import Agents from '../../routes/agents/agents';
import Cancun from '../../routes/groupTravel/cancun/cancun'
import Excursions from '../../routes/excursions/excursions';
import FamilyTravel from '../../routes/familyTravel/familyTravel';
import Forms from '../../routes/forms/forms';
import GroupTravel from '../../routes/groupTravel/groupTravel';
import Home from '../../routes/home/home';
import Layout from '../layout/layout';
import Nashville from '../../routes/groupTravel/nashville/nashville';
import NotFound from '../../routes/notFound/notFound';
import Paris from '../../routes/groupTravel/paris/paris';
import Payment from '../../routes/forms/payment/payment';
import Reservation from '../../routes/forms/reservation/reservation';
import Terms from '../../routes/forms/terms/terms';

//Assets
import logo from '../../assets/tftlogo.png';

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
          <Route path='/excursions' component={Excursions} exact/>
          <Route path='/family-travel' component={FamilyTravel} exact/>
          <Route path='/agents' component={Agents} exact/>
          <Route path='/agents/:name' component={Agent}/>
          <Route path='/terms' component={Terms} exact/>
          <Route path='/*' component={NotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default app;
