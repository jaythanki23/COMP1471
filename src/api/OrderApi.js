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
import {ApiClient} from "../ApiClient";
import {NewOrder} from '../model/NewOrder';
import {Order} from '../model/Order';

/**
* Order service.
* @module api/OrderApi
* @version 1.0
*/
export class OrderApi {

    /**
    * Constructs a new OrderApi. 
    * @alias module:api/OrderApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createOrder operation.
     * @callback moduleapi/OrderApi~createOrderCallback
     * @param {String} error Error message, if any.
     * @param {'Number'{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new order
     * Create a new order
     * @param {module:model/NewOrder} body Create a new order
     * @param {module:api/OrderApi~createOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createOrder(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createOrder");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['text/plain'];
      let returnType = 'Number';

      return this.apiClient.callApi(
        '/order', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getOrderById operation.
     * @callback moduleapi/OrderApi~getOrderByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Order{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find order by ID
     * Returns a single order
     * @param {Number} orderId ID of order to return
     * @param {module:api/OrderApi~getOrderByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getOrderById(orderId, callback) {
      
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling getOrderById");
      }

      let pathParams = {
        'orderId': orderId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/xml'];
      let returnType = Order;

      return this.apiClient.callApi(
        '/order/{orderId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}