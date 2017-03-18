import React from 'react';
import {FOOD_CHOICES} from '../testValues';

/*
example of an uncontrolled component
i'm not sure if we even need to accept a value?
*/

const FoodChooser = ({
  foodChoices=FOOD_CHOICES,
  changeHandler=(v) => v
}) => {

  const options = foodChoices.map((choice, i) => (
    <option 
      key={choice.name} 
      value={choice.name}
    >
      {choice.name.toUpperCase()}
    </option>
  ));

  return (
    <select 
      name="foodChoice" 
      onChange={(e) => changeHandler(_optionFrom(e))}
    >
      <option value="">Choose One</option>
      {options}
    </select>
  );
};

const _optionFrom = (e) => {
  let val = e.target.value;
  console.log(`option chosen: ${val}`);
  return val;
};

export default FoodChooser;