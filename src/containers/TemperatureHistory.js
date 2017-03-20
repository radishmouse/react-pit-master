import React from 'react';
import './TemperatureHistory.css';

import Readout from './Readout';

const TemperatureHistory = ({valueArray=[0, 0, 0]}) => (
  <div className="temperature-history">
    {valueArray.map((val, i) => <Readout className="small" key={i} value={val} />)} 
  </div>
);

export default TemperatureHistory;
