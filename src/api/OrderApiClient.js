import axios from 'axios';
import Base_url from "../Url/url";

export const OrderApiClient = {
    getOrder(id){
        return axios.get(`${Base_url}/order/${id}`).then(
            (response)=>{
                // console.log(response);
                // console.log("success");
                return response.data
            },(error)=>{
                console.log(error);
                console.log("error");
            }
        )
    },
    getAllOrders(){
        return axios.get(`${Base_url}/order`).then(
            (response)=>{
                // console.log("ALL ORDERS: ", response);
                // console.log("success");
                return response.data
            },(error)=>{
                console.log(error);
                console.log("error");
            }
        )
    },
    getOrdersByCustomerId(id){
        return axios.get(`${Base_url}/order/customer/${id}`).then(
            (response)=>{
                // console.log(response);
                // console.log("success");
                return response.data
            },(error)=>{
                console.log(error);
                console.log("error");
            }
        )
    },
    getOrdersByStaffId(id){
        return axios.get(`${Base_url}/order/staff/${id}`).then(
            (response)=>{
                // console.log(response);
                // console.log("success");
                return response.data
            },(error)=>{
                console.log(error);
                console.log("error");
            }
        )
    },
    acceptOrder(id){
        return axios.put(`${Base_url}/order/${id}`).then(
            (response)=>{
                // console.log(response);
                // console.log("success");
            },(error)=>{
                console.log(error);
                console.log("error");
            }
        )
    },
    createOrder(order){
        return axios.post(`${Base_url}/order`, order).then(
            (response)=>{
                console.log(response);
                console.log("success");
                return response.data
            },(error)=>{
                console.log(error);
                console.log("error");
            }
        )
    }
}