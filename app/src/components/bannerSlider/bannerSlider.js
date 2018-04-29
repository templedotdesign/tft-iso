//Core
import React, { Component } from 'react';

//CSS
import classes from './bannerSlider.css';

class BannerSlider extends Component {
  state = {
    currentIndex: 0
  }
  componentDidMount() {
    setInterval(() => {
      this.incrementIndex();
    }, 5000);
  }

  incrementIndex = () => {
    let index = this.state.currentIndex;
    if(index === this.props.images.length - 1) {
      index = 0;
    } else {
      index++;
    }
    this.setState({...this.state, currentIndex: index});
  }

  render() {
    const sliderStyle = {
      backgroundImage: `url(${this.props.images[this.state.currentIndex].src})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: this.props.images[this.state.currentIndex].options.size,
      backgroundPosition: this.props.images[this.state.currentIndex].options.position,
      justifyContent: this.props.justify || 'space-around',
      alignItems: this.props.align || 'center'
    }
    let bannerClasses = [classes.slider, classes.visible]
    return (
        <div className={bannerClasses.join(' ')} style={sliderStyle}>
          <h1 style={{color: 'white'}}>{this.props.heading}</h1>
        </div>
    );
  }
}

export default BannerSlider;