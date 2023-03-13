/*
 * Sterilisation API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {Tray} from './Tray';

/**
 * The Order model module.
 * @module model/Order
 * @version 1.0
 */
export class Order {
  /**
   * Constructs a new <code>Order</code>.
   * @alias module:model/Order
   * @class
   * @param orderId {Number} 
   * @param customerId {Number} 
   * @param _date {Date} 
   * @param trays {Array.<module:model/Tray>} 
   */
  constructor(orderId, customerId, _date, trays) {
    this.orderId = orderId;
    this.customerId = customerId;
    this._date = _date;
    this.trays = trays;
  }

  /**
   * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Order} obj Optional instance to populate.
   * @return {module:model/Order} The populated <code>Order</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Order();
      if (data.hasOwnProperty('orderId'))
        obj.orderId = ApiClient.convertToType(data['orderId'], 'Number');
      if (data.hasOwnProperty('customerId'))
        obj.customerId = ApiClient.convertToType(data['customerId'], 'Number');
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'Date');
      if (data.hasOwnProperty('trays'))
        obj.trays = ApiClient.convertToType(data['trays'], [Tray]);
    }
    return obj;
  }
}

/**
 * @member {Number} orderId
 */
Order.prototype.orderId = undefined;

/**
 * @member {Number} customerId
 */
Order.prototype.customerId = undefined;

/**
 * @member {Date} _date
 */
Order.prototype._date = undefined;

/**
 * @member {Array.<module:model/Tray>} trays
 */
Order.prototype.trays = undefined;

