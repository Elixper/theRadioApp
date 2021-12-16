import React from 'react';

const Line = ({ color,width }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 1,
          width:width,
          opacity:0.7,
      }}
  />
);

export default Line;