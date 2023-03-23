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
    getOrderByCustomerId(id){
        return axios.get(`${Base_url}/order/customer/${id}`).then(
            (response)=>{
                console.log(response);
                console.log("success");
                return response.data[0]
            },(error)=>{
                console.log(error);
                console.log("error");
            }
        )
    },
    acceptOrder(id){
        return axios.put(`${Base_url}/order/${id}`).then(
            (response)=>{
                console.log(response);
                console.log("success");
            },(error)=>{
                console.log(error);
                console.log("error");
            }
        )
    }
}