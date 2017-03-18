import React from 'react';

/*
it's a controlled input.
i, the pitmaster, can change the label.
as i type, it updates the "customer"
associated with this "order"
*/

const NameLabel = ({name, changeHandler}) => (
  <input
    type="text"
    value={name}
    onChange={(e) => changeHandler(_valueFrom(e))}
  />
);

const _valueFrom = (e) => {
  let val = e.target.value;
  console.log(`namelabel : ${val}`);
  return val;
};

export default NameLabel;