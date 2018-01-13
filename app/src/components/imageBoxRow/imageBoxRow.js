import React from 'react';

import ImageBox from '../imageBox/imageBox';


const imageBoxRow = (props) => {
  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '100px 50px',
    minHeight: '30vh',
    backgroundColor: 'white'
  }
  return (
    <div style={style}>
      {props.boxes.map((box, index) => {
        return (
          <ImageBox key={Math.random()} {...props.boxes[index]}/>
        );
      })}
    </div>
  );
};

export default imageBoxRow;