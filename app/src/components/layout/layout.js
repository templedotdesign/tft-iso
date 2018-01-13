import React from 'react';

import Wrapper from '../wrapper/wrapper';
import Toolbar from '../toolbar/toolbar';
import Footer from '../footer/footer';

const layout = (props) => {
  return (
    <Wrapper>
      <Toolbar/>
      {props.children}        
      <Footer logo={props.logo}/>
    </Wrapper>
  );
};

export default layout;