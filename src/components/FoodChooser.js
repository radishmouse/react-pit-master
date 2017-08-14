import React from 'react';

/*
example of an uncontrolled component
i'm not sure if we even need to accept a value?
*/

const FoodChooser = ({
  currentChoice='',
  foodChoices=[],
  changeHandler=(v) => v
}) => {

  const options = foodChoices.map((choice, i) => (
    <option 
      key={choice} 
      value={choice}
    >
      {choice.toUpperCase()}
    </option>
  ));

  return (
    <select 
      name="foodChoice" 
      onChange={(e) => changeHandler(_optionFrom(e))}
      value={currentChoice}
    >
      <option value="">Choose Meat</option>
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