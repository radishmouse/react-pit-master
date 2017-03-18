import React from 'react';
import Readout from './Readout';

const TemperatureHistory = ({valueArray=[1, 5, 10]}) => (
  // we should make this a flex container
  // note that using the index is considered a last resort.
  <div>
    {valueArray.map((val, i) => <Readout key={i} value={val} />)} 
  </div>
);

export default TemperatureHistory;
