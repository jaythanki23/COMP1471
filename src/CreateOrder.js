import React, { Component } from 'react'
import {OrderApi} from './api/OrderApi';
import {NewOrder} from './model/NewOrder';
import {NewTray} from './model/NewTray';

class CreateOrder extends Component {
  tray = new NewTray();

  initialState = {
    customerId : 0,
    trays: [this.tray]
  }

  state = this.initialState

  api = new OrderApi()
  body = new NewOrder(); // {NewOrder} Create a new order
  tray = new NewTray();

  render(){
    // const { customerId, trays } = this.state;

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
          Trays:
          <br/>
            Tray type: <select name="trayType" id="trayType">
                <option value="1">Cancer surgery</option>
                <option value="2">Liver replacement</option>
              </select> <br/>
            Operation ID: <input type="number" name="operationId"/> <br/>
            Operation date: <input type="date" name="operationDate"/> <br/>
            Doctor in charge: <input type="text" name="doctor" onChange={this.handleChange}/> <br/>
          <br/>
          <input type="button" value="Submit" onClick={this.submitOrder} />
        </form>
      </div>
    );
  }


  handleChange = (event) => {
    const {name, value } = event.target

    console.log(event.target)

      switch(name){
        case "customerId":
          this.setState({
            customerId: parseInt(value)
          })
        break;
        case "trayType":
        this.setState({
          trays(0).trayTypeId = parseInt(value);
        })
        break;
        case "operationDate":
        this.setState({
          trays[0].operation._date = value;
        })
        break;
        case "operationId":
        this.setState({
          trays[0].operation.id = ParseInt(value);
        })
        break;
        case "doctor":
        this.setState({
          trays[0].operation.doctor = value;
        })
        break;
      }


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
