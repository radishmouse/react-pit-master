import React from 'react';

import './MonitorPanel.css';
import Monitor from './Monitor';

const MonitorPanel = ({orderArray=[]}) => (
  <div className="monitor-panel">
    {orderArray.map((order) => (
      <Monitor {...order} />
    ))}
  </div>
);

export default MonitorPanel;