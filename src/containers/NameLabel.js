import React from 'react';

/*
it's a controlled input.
i, the pitmaster, can change the label.
as i type, it updates the "customer"
associated with this "order"
*/

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
  : <span>{name}</span>
);

const _valueFrom = (e) => {
  let val = e.target.value;
  console.log(`namelabel : ${val}`);
  return val;
};

export default NameLabel;