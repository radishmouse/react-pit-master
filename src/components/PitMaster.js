import React from 'react';


import FoodChooserForm from './FoodChooserForm';
import Monitor from '../containers/Monitor';
import MonitorPanel from '../containers/MonitorPanel';

import pitmasterLogo from './pitmaster.png';
import './PitMaster.css';

import {
  FOOD_CHOICES, 
  tempsForFood,
  cookFactorForFood,
  ROOM_TEMP
} from '../config';

import {
  cookFood,
  Sensor,
  randomIntFromInterval
} from '../lib/GrillSimulator';

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

  componentDidMount() {
    setTimeout(() => {
    [
        {
          orderName: 'Mike',
          foodChoice: 'ribs'
        },
        {
          orderName: 'Carol',
          foodChoice: 'brisket'
        },
        {
          orderName: 'Alice',
          foodChoice: 'veggie burger'
        },
        {
          orderName: 'Greg',
          foodChoice: 'wings'
        },
        {
          orderName: 'Marcia',
          foodChoice: 'tempeh'
        },
        {
          orderName: 'Peter',
          foodChoice: 'portobello'
        },
        {
          orderName: 'Jan',
          foodChoice: 'ribs'
        },
        {
          orderName: 'Bobby',
          foodChoice: 'wings'
        },
        {
          orderName: 'cindy',
          foodChoice: 'brisket'
        },
      ].forEach((o) => {
        setTimeout(() => this._addOrder(o), 
        randomIntFromInterval());
      });
    }, 1000)
  }

  render() {
    return (
      <div className="pitmaster">
        <h1>
          <img src={pitmasterLogo} alt="pitmaster" />
        </h1>
        <FoodChooserForm 
          foodChoices={FOOD_CHOICES}
          submitHandler={this._addOrder}
        />

        <MonitorPanel 
          closeHandler={this._removeOrder}
          orderArray={
            this.state.orders.map((order) => ({
              key: order.id,
              id: order.id,
              name: order.orderName,
              food: order.foodChoice,
              foodTemperature: order.current,
              historyArray: order.history,
              ovenTemperature: tempsForFood(order.foodChoice).oven
            }))
        } />
      </div>
    );
  }

  _addOrder = (order) => {
    console.log(order)
    order.id = (new Date()).getTime();
    order.sensor = new Sensor(cookFood(ROOM_TEMP, 
                                       tempsForFood(order.foodChoice).oven, 
                                       cookFactorForFood(order.foodChoice)
                                      ), 
                              () => this._updateTemperatures(order.id));  
    this.setState({
      orders: [...this.state.orders, order]
    });
    order.sensor.start();
  }

  _removeOrder = (id) => (
    this.setState({
      orders: this.state.orders.filter((order) => {
        let shouldStay = order.id !== id;
        if (!shouldStay) {
          order.sensor.stop();
        }
        return shouldStay;
      })
    })
  )

  _totalCurrentTemperature = () => (
    this.state.orders.reduce((accumulator, {current}) => (accumulator + current), 0)
  )

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
}

export default PitMaster;