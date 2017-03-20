import React from 'react';
import './Readout.css';

const Readout = ({value=0, className}) => (
  // oooh, we can play with left aligning, right aligning, and all that jazz
  // we can also switch on prop to specify different classNames
  <div>
    <span className={className} >{
      typeof value === 'number' ? value.toFixed(2) 
                                : value
      }</span>
  </div>
);

export default Readout;