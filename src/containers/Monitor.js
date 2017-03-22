import React from 'react';
import NameLabel from './NameLabel';
import TemperatureHistory from './TemperatureHistory';
import Readout from './Readout';

import closeButton from './close.svg';
import gradient from './gradient.svg';
import './Monitor.css';

const Monitor = ({
  id,
  name,
  food,
  foodTemperature,
  historyArray,
  ovenTemperature,
  changeHandler,
  closeHandler
}) => (
  <div className="monitor">
    <div className="monitorHeader">
      <NameLabel 
        name={`${food} for: ${name}`} 
      />
      <div className="closeMonitorButton" onClick={(e) => closeHandler(id)}>
        <img src={closeButton} alt='X' />
      </div>
    </div>
    <div className="monitorBody">
      <div className="monitorTemperatures">
        <Readout className="" deemphasize={true} value={ovenTemperature} label="Target" />
        <Readout className="" emphasize={true} value={foodTemperature} label="Current" />
        <TemperatureHistory valueArray={historyArray} />
      </div>
      <div className="monitorGraph">
        <img src={gradient} alt="" />
      </div>
    </div>
  </div>
);

export default Monitor;