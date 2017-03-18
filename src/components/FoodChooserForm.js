import React from 'react';
import FoodChooser from '../containers/FoodChooser';
import NameLabel from '../containers/NameLabel';


import {FOOD_CHOICES} from '../testValues';

// aha!
// i need state here, because...
// we have more than one thing that can change

// that is, the children can produce
// values independently of one another
// and, the user may change their mind
// before they submit

// so, here, state is a buffer
// and we only want there to be one
// value returned from the form on submit

/*const FoodChooserForm = ({
  foodChoices,
  submitHandler
}) => (
  <form onSubmit=
);
*/

class FoodChooserForm extends React.Component {
  constructor(props) {
    super(props);
    this.foodChoices = props.foodChoices || FOOD_CHOICES;
    this.submitHandler = props.submitHandler;

    // maintain the current name and food choice
    // before submitting
    this.state = {
      orderName: '',
      foodChoice: ''
    };
  }

  render() {
    return <form onSubmit={this._handleSubmit}>
      <NameLabel
        name={this.state.orderName}
        placeholder="Who's order is this?"
        changeHandler={this._updateOrderName}
      />
      <FoodChooser
        foodChoices={FOOD_CHOICES}
        changeHandler={this._updateFoodChoice}
      />
      <input type="submit" />
    </form>
  }

  _updateOrderName = (newName) => (
    this.setState({
      orderName: newName
    })
  )
  _updateFoodChoice = (newChoice) => (
    this.setState({
      foodChoice: newChoice
    })
  )

  // use arrow function for binding this
  _handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.submitHandler(this.state);
  }
}

export default FoodChooserForm;