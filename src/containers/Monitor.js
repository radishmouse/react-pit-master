import React from 'react';
import NameLabel from './NameLabel';
import TemperatureHistory from './TemperatureHistory';
import Readout from './Readout';

const Monitor = ({
  name,
  changeHandler,
  foodTemperature,
  historyArray,
  ovenTemperature
}) => (
  <div>
    <NameLabel 
      name={name} 
      changeHandler={changeHandler}
    />
    <Readout value={foodTemperature} />
    <TemperatureHistory valueArray={historyArray} />
    <Readout value={ovenTemperature} />
  </div>
);

export default Monitor;