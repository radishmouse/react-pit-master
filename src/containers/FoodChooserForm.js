import React from 'react';
import FoodChooser from '../components/FoodChooser';
import NameLabel from '../components/NameLabel';

import './FoodChooserForm.css';
import create from './create-button.svg';

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

const _blankState = () => ({
  orderName: '',
  foodChoice: ''
});

class FoodChooserForm extends React.Component {
  constructor(props) {
    super(props);
    this.foodChoices = props.foodChoices || [];
    this.submitHandler = props.submitHandler;

    // maintain the current name and food choice
    // before submitting
    this.state = _blankState();
  }

  render() {
    return (
      <form className="foodForm" onSubmit={this._handleSubmit}>
        <span className="foodFormLabel">New pit:</span>
        <FoodChooser
          currentChoice={this.state.foodChoice}
          foodChoices={this.foodChoices}
          changeHandler={this._updateFoodChoice}
        />
        <NameLabel
          name={this.state.orderName}
          placeholder="Who's order is this?"
          changeHandler={this._updateOrderName}
          getRef={(r) => this.nameField = r}
        />
        <input type="image" src={create} />
      </form>
    );
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
    this.setState(_blankState());
    this.nameField.focus();
  }
}

export default FoodChooserForm;
