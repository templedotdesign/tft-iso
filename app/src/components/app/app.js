import React from 'react';

import Layout from '../layout/layout';
import Home from '../home/home';

import logo from '../../assets/tftlogo.jpg';

const app = () => {
  return (
    <div>
      <Layout logo={logo}>
        <Home/>
      </Layout>
    </div>
  );
};

export default app;
