import React from 'react';
import './Readout.css';

const Readout = ({
  value=0, 
  label='', 
  className, 
  emphasize=false, 
  deemphasize=false
}) => {
  let formattedValue = typeof value === 'number' ? value.toFixed(2) 
                                                 : value;
  if (emphasize) {
    formattedValue = <span className="emphasize">{formattedValue}</span>
  }

  if (deemphasize) {
    formattedValue = <span className="deemphasize">{formattedValue}</span>
  }

  if (label) {
    label = <span className="readoutLabel">{`${label}: `}</span>
  }

  return (
    <div className="readout">
      <span className={className}>
        {label}
        {formattedValue}
      </span>
    </div>
  );
};

export default Readout;