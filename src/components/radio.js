import React from 'react';
import Line from './line';
import Image from './image';

const Radio = ({ name, frequency, image,onClick}) => (
  <div className="radioBox" onClick={onClick}>
    <Image image={image} />
    <div className="radioTitle">
      <p>{name}</p>
      <p className="freq">{frequency}</p>
    </div>
    <Line color="#9F9FAC" width="65%" />
  </div>
);

export default Radio;
