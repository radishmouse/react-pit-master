import React from 'react';

import FoodChooserForm from './FoodChooserForm';
import Monitor from '../containers/Monitor';

import {FOOD_CHOICES} from '../testValues';

import {
  cookFood,
  Sensor
} from '../lib/GrillSimulator';

/*

might be nice to move the monitors collection
to their own component
that has the ability to sort and filter

potentially, this could be expanded to have
a detail view that is routed to

and the filtered views could be their own route

*/

class PitMaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  componentWillUnmount() {
    this.state.orders.forEach(({sensor}) => sensor.stop());
  }

  render() {
    return (
      <div>
        <h1>PitMaster</h1>
        <FoodChooserForm 
          foodChoices={FOOD_CHOICES}
          submitHandler={this._addOrder}
        />

        {this.state.orders.map((order) => (
          <Monitor 
            key={order.id}
            name={`${order.orderName}`}
            foodTemperature={order.current}
            historyArray={order.history} 
            ovenTemperature={240.3}
          />
        ))}
      </div>
    );
  }

  _addOrder = (order) => {
    order.id = (new Date()).getTime();
    order.sensor = new Sensor(cookFood(70, 260), () => {// these vals will come from config
      this._updateTemperatures(order.id)
    });  
    console.log(order);
    this.setState({
      orders: [...this.state.orders, order]
    });
    order.sensor.start();
  }

  _updateTemperatures = (id) => {
    this.setState({
      orders: this.state.orders.map((order) => (
        order.id === id ? {
                            ...order, 
                            current: order.sensor.current(),
                            history: [
                              order.sensor.minutesAgo(1),
                              order.sensor.minutesAgo(5),
                              order.sensor.minutesAgo(10),
                            ]
                          }
                        : order

      ))
    })
  }

  // _updateOrderName = (id, newName) => {
  //   this.setState({
  //     orders: this.state.orders.map((order) => (
  //       order.id === id ? {...order, orderName: newName}
  //                       : order

  //     ))
  //   })
  // }

}

export default PitMaster;