import React from 'react';
import Readout from './Readout';

const TemperatureHistory = ({valueArray=[0, 0, 0]}) => (
  // we should make this a flex container
  // note that using the index is considered a last resort.
  // you could also make them increasingly smaller (further in the past is smaller)
  <div>
    {valueArray.map((val, i) => <Readout key={i} value={val} />)} 
  </div>
);

export default TemperatureHistory;
