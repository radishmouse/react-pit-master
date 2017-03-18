import React from 'react';

import FoodChooserForm from './FoodChooserForm';
import Monitor from '../containers/Monitor';

import {FOOD_CHOICES} from '../testValues';

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
        <h1>PitMaster, yo</h1>
        <FoodChooserForm 
          foodChoices={FOOD_CHOICES}
          submitHandler={this._addOrder}
        />

        {this.state.orders.map((order) => (
          <Monitor 
            key={order.id}
            name={`${order.orderName}: ${order.foodChoice}`}
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
        order.id === id ? Object.assign({}, order, {orderName: newName})
                               : order

      ))
    })
  }

}

export default PitMaster;