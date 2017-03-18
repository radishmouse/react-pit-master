import React from 'react';

// move this to a global config
// because foodchooser does not necessarily need
// to know the min/max/target temps per food

const FOOD_CHOICES = [
  {
    name: 'brisket'
  },
  {
    name: 'ribs'
  },
  {
    name: 'wings'
  },
  {
    name: 'veggie burger'
  },
  {
    name: 'portobello'
  },
  {
    name: 'tempeh'
  },
  {
    name: 'oyster'
  },
  {
    name: 'tuna'
  },
  {
    name: 'calamari'
  },
]

const options = FOOD_CHOICES.map((choice, i) => (
  <option value={choice.name}>{choice.name.toUpperCase()}</option>
));

const FoodChooser = ({
  changeHandler=(v) => v
}) => (
  <select name="foodChoice" onChange={(e) => changeHandler(_optionFrom(e))}>
    {options}
  </select>
);

const _optionFrom = (e) => {
  let val = e.target.value;
  console.log(`option chosen: ${val}`);
  return val;
}

export default FoodChooser
