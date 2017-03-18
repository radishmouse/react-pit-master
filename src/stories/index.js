import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import Readout from '../containers/Readout';
import TemperatureHistory from '../containers/TemperatureHistory';

// storiesOf('Welcome', module)
//   .add('to Storybook', () => (
//     <Welcome showApp={linkTo('Button')}/>
//   ));

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
