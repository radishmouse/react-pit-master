import React from 'react';

import './MonitorPanel.css';
import Monitor from './Monitor';

const MonitorPanel = ({orderArray=[], closeHandler}) => (
  <div className="monitor-panel">
    {orderArray.map((order) => (
      <Monitor {...order} closeHandler={closeHandler} />
    ))}
  </div>
);

export default MonitorPanel;