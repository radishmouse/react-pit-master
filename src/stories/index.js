import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import '../index.css';

import Readout from '../containers/Readout';
import TemperatureHistory from '../containers/TemperatureHistory';
import NameLabel from '../containers/NameLabel';
import Monitor from '../containers/Monitor';

import FoodChooser from '../containers/FoodChooser';
import FoodChooserForm from '../components/FoodChooserForm';

import PitMaster from '../components/PitMaster';

import {FOOD_CHOICES} from '../config';

storiesOf('PitMaster App', module)
  .add('from config', () => (
    <PitMaster />
  ));

storiesOf('FoodChooserForm', module)
  .add('from config', () => (
    <FoodChooserForm 
      foodChoices={FOOD_CHOICES}
      submitHandler={(v) => console.log(`story for food chooser received: ${v}`)}
    />
  ));

storiesOf('FoodChooser', module)
  .add('from config', () => (
    <FoodChooser />
  ));

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
