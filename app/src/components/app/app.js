//Core
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Components
import Layout from '../layout/layout';
import Home from '../../routes/home/home';
import Forms from '../../routes/forms/forms';
import GroupTravel from '../../routes/groupTravel/groupTravel';
import Excursions from '../../routes/excursions/excursions';
import About from '../../routes/about/about';
import Agent from '../../routes/agents/agent/agent';
import Agents from '../../routes/agents/agents';
import Contact from '../../routes/contact/contact';
import Reservation from '../../routes/forms/reservation/reservation';
import Payment from '../../routes/forms/payment/payment';
import Terms from '../../routes/forms/terms/terms';
import Paris from '../../routes/groupTravel/paris/paris';
import Nashville from '../../routes/groupTravel/nashville/nashville';
import Cancun from '../../routes/groupTravel/cancun/cancun'

//Assets
import logo from '../../assets/tftlogo.jpg';

const app = () => {
  return (
    <BrowserRouter>
      <Layout logo={logo}>
        <Route path='/' component={Home} exact/>
        <Route path='/forms' component={Forms} exact/>
        <Route path='/forms/reservation' component={Reservation}/>
        <Route path='/forms/payment' component={Payment}/>
        <Route path='/group-travel' component={GroupTravel} exact/>
        <Route path='/group-travel/paris' component={Paris}/>
        <Route path='/group-travel/nashville' component={Nashville}/>
        <Route path='/group-travel/cancun' component={Cancun}/>
        <Route path='/excursions' component={Excursions}/>
        <Route path='/about' component={About}/>
        <Route path='/agents' component={Agents} exact/>
        <Route path='/agents/name' component={Agent}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/terms' component={Terms}/>
      </Layout>
    </BrowserRouter>
  );
};

export default app;
