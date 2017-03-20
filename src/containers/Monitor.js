import React from 'react';
import NameLabel from './NameLabel';
import TemperatureHistory from './TemperatureHistory';
import Readout from './Readout';

import './Monitor.css';

const Monitor = ({
  name,
  food,
  foodTemperature,
  historyArray,
  ovenTemperature,
  changeHandler
}) => (
  <div className="monitor">
    <NameLabel 
      name={`${food} for: ${name}`} 
    />
    <div className="center">
      <Readout className="large" value={foodTemperature} />
    </div>
    <TemperatureHistory valueArray={historyArray} />
    <div className="push-right">
      <Readout className="smallest" value={ovenTemperature} />
    </div>
  </div>
);

export default Monitor;