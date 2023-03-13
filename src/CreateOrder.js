import React, { Component } from 'react'
import {OrderApi} from './api/OrderApi';
import {ApiClient} from './ApiClient';
import {NewOrder} from './model/NewOrder';

class CreateOrder extends Component {
  initialState = {
    customerId : 0,
    trays: []
  }

  state = this.initialState

  api = new OrderApi()
  body = new NewOrder(); // {NewOrder} Create a new order

  render() {
    const { customerId, trays } = this.state;

    return (
      <div>
        <h1>Create a new order</h1>
        <br/>
        <form>
          Customer ID:
          <input
            type="number"
            name="customerId"
            id="customerId"
            defaultValue={this.customerId}
            onChange={this.handleChange}
             />
          <br/>
          Trays: TODO
          <br/>
          <input type="button" value="Submit" onClick={this.submitOrder} />
        </form>
      </div>
    );
  }

  handleChange = (event) => {
    const { customerId, value } = event.target

console.log(value)
    this.setState({
      [customerId]: value,
    })
  }

  createOrderCallback = (error, data, response) => {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + data);
    }
  }

  submitOrder = () => {
    this.body.customerId = this.state.customerId;
    this.body.trays = this.state.trays;
    this.api.createOrder(this.body, this.createOrderCallback);

    this.setState(this.initialState)
  }
}

export default CreateOrder
