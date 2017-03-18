import React from 'react';

const Readout = ({value=0}) => (
  // oooh, we can play with left aligning, right aligning, and all that jazz
  // we can also switch on prop to specify different classNames
  <div>
    <span>{value}</span>
  </div>
);

export default Readout;