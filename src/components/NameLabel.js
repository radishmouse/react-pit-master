import React from 'react';

import './NameLabel.css';

/*
it's a controlled input.
i, the pitmaster, can change the label.
as i type, it updates the "customer"
associated with this "order"
*/

const capitalizeFirstLetter = (word) => (
  (new String(word.substring(0, 1))).toUpperCase() + 
  word.substring(1)
);

const NameLabel = ({
  name, 
  changeHandler, 
  placeholder='',
  getRef
}) => (
  typeof changeHandler === 'function' ?
    <input
      type="text"
      value={name}
      placeholder={placeholder}
      onChange={(e) => changeHandler(_valueFrom(e))}
      ref={getRef}
    />
  : <span>{capitalizeFirstLetter(name)}</span>
);

const _valueFrom = (e) => {
  let val = e.target.value;
  console.log(`namelabel : ${val}`);
  return val;
};

export default NameLabel;