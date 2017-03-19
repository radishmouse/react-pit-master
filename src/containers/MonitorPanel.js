import React from 'react';

import Monitor from './Monitor';

const MonitorPanel = ({orderArray=[]}) => (
  <div>
    {orderArray.map((order) => (
      <Monitor 
        key={order.id}
        name={order.orderName}
        food={order.foodChoice}
        foodTemperature={order.current}
        historyArray={order.history} 
        ovenTemperature={240.3}
      />
    ))}
  </div>
);

export default MonitorPanel;