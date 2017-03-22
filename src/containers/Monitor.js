import React from 'react';
import NameLabel from './NameLabel';
import TemperatureHistory from './TemperatureHistory';
import Readout from './Readout';

import closeButton from './close.svg';
import gradient from './gradient.svg';
import whiteArrow from './white-arrow.svg';
import blueArrow from './blue-arrow.svg';
import './Monitor.css';

// const targetArrow = {
  // bottom: '178px'
// };

const Monitor = ({
  id,
  name,
  food,
  foodTemperature,
  historyArray,
  ovenTemperature,
  changeHandler,
  closeHandler
}) => {
  const currentArrow = {
    transform: `translate3d(-62px, ${(((ovenTemperature - foodTemperature) / ovenTemperature) * 150) + 7}px, 0)`
  };

  let headerStyle = {};
  if ((ovenTemperature - foodTemperature) < 10) {
    headerStyle.color = 'red';
  };


  return (
    <div className="monitor">
      <div className="monitorHeader" style={headerStyle}>
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
          <img className="arrow" src={whiteArrow} alt="white arrow" />
          <img style={currentArrow} className="arrow" src={blueArrow} alt="blue arrow" />
        </div>
      </div>
    </div>
  );
};

export default Monitor;