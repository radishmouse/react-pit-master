import React from 'react';

import Monitor from './Monitor';

const MonitorPanel = ({orderArray=[]}) => (
  <div>
    {orderArray.map((order) => (
      <Monitor {...order} />
    ))}
  </div>
);

export default MonitorPanel;