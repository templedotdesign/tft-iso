//Core
import React, { Component } from 'react';

//Components
import Footer from './footer/footer';
import SideDrawer from '../layout/sideDrawer/sideDrawer';
import Toolbar from './toolbar/toolbar';
import Wrapper from './wrapper/wrapper';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  handleClick = (event) => {
    this.setState({...this.state, showSideDrawer: !this.state.showSideDrawer});
  };

  render() {
    return (
      <Wrapper>
        <Toolbar clicked={this.handleClick}/>
        <SideDrawer clicked={this.handleClick} visible={this.state.showSideDrawer}/>
        {this.props.children}        
        <Footer logo={this.props.logo}/>
      </Wrapper>
    );
  }
}

export default Layout;