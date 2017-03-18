import React from 'react';
import {FOOD_CHOICES} from '../testValues';

const FoodChooser = ({
  currentChoice,
  foodChoices=FOOD_CHOICES,
  changeHandler=(v) => v
}) => {

  const options = foodChoices.map((choice, i) => (
    <option key={choice.name} value={choice.name}>{choice.name.toUpperCase()}</option>
  ));

  return (
    <select name="foodChoice" onChange={(e) => changeHandler(_optionFrom(e))}>
      <option value={currentChoice}>{currentChoice}</option>
      {options}
    </select>
  );
};

const _optionFrom = (e) => {
  let val = e.target.value;
  console.log(`option chosen: ${val}`);
  return val;
}

export default FoodChooser
