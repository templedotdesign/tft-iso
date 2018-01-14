//Core
import React from 'react';

const banner = (props) => {
  let style = {
    background: `url(${props.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: props.alignment,
    justifyContent: 'center',
    color: 'white',
    height: '80vh'
  }
  return (
    <div style={style}>
      <h1 style={{padding: '70px 0'}}>{props.heading}</h1>
    </div>
  );
}

export default banner;