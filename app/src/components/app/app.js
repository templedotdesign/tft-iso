//Core
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Components
import Layout from '../layout/layout';
import Home from '../../routes/home/home';
import Forms from '../../routes/forms/forms';
import Disney from '../../routes/disney/disney';
import GroupTravel from '../../routes/groupTravel/groupTravel';
import Resources from '../../routes/resources/resources';
import About from '../../routes/about/about';
import Agents from '../../routes/agents/agents';
import Contact from '../../routes/contact/contact';
import Reservation from '../../routes/reservation/reservation';
import Payment from '../../routes/payment/payment';

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
        <Route path='/disney' component={Disney}/>
        <Route path='/group-travel' component={GroupTravel}/>
        <Route path='/resources' component={Resources}/>
        <Route path='/about' component={About}/>
        <Route path='/agents' component={Agents}/>
        <Route path='/contact' component={Contact}/>
      </Layout>
    </BrowserRouter>
  );
};

export default app;
