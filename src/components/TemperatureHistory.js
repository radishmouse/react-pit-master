import React from 'react';
import './TemperatureHistory.css';

import Readout from './Readout';

const labels = [
  "-1 min",
  "-5 min",
  "-10 min"
];

const TemperatureHistory = ({valueArray=[0, 0, 0]}) => (
  <div className="temperature-history">
    {valueArray.map((val, i) => <Readout className="" key={i} value={val} label={labels[i]} />)} 
  </div>
);

export default TemperatureHistory;
