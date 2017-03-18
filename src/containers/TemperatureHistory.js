import React from 'react';
import Readout from './Readout';

const TemperatureHistory = ({valueArray=[1, 5, 10]}) => (
  // we should make this a flex container
  <div>
    {valueArray.map((val) => <Readout value={val} />)}
  </div>
);

export default TemperatureHistory;
