import React from 'react';

import FoodChooserForm from './FoodChooserForm';
import Monitor from '../containers/Monitor';

import {FOOD_CHOICES} from '../testValues';


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
            changeHandler={(newName) => this._updateOrderName(order.id, newName)}
            foodTemperature={80.1}
            valueArray={[79.8, 77.2, 70.9]} 
            ovenTemperature={240.3}
          />
        ))}
      </div>
    );
  }

  _addOrder = (order) => {
    order.id = (new Date()).getTime();
    console.log(order);
    this.setState({
      orders: [...this.state.orders, order]
    })
  }

  _updateOrderName = (id, newName) => {
    this.setState({
      orders: this.state.orders.map((order) => (
        order.id === id ? {...order, orderName: newName}
                          : order

      ))
    })
  }

}

export default PitMaster;