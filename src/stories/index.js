import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import Readout from '../containers/Readout';
import TemperatureHistory from '../containers/TemperatureHistory';
import NameLabel from '../containers/NameLabel';
import Monitor from '../containers/Monitor';

// storiesOf('Welcome', module)
//   .add('to Storybook', () => (
//     <Welcome showApp={linkTo('Button')}/>
//   ));


storiesOf('Monitor', module)
  .add('static values', () => (
    <Monitor 
      name={'static text'}
      changeHandler={action('NameLabel')}
      foodTemperature={80.1}
      valueArray={[79.8, 77.2, 70.9]} 
      ovenTemperature={240.3}
    />
  ));

storiesOf('NameLabel', module)
  .add('static text', () => (
    <NameLabel 
      name={'static text'}
      changeHandler={action('NameLabel')}
    />
  ));

storiesOf('TemperatureHistory', module)
  .add('with defaults', () => (
    <TemperatureHistory />
  ))
  .add('with three value props', () => (
    <TemperatureHistory valueArray={[79.8, 77.2, 70.9]} />
  ));

storiesOf('Readout', module)
  .add('with default', () => (
    <Readout />
  ))
  .add('with prop', () => (
    <Readout value={1} />
  ));
