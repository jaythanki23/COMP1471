import axios from 'axios';
import Base_url from "../Url/url";

export const TrayApiClient = {
    getAllTraysByOrderId(id){
        return axios.get(`${Base_url}/order/tray/${id}`).then(
            (response)=>{
                return response.data                
            },(error)=>{
                console.log(error);
                console.log("error");
            }
        )
    },
    getAllTrayConfigs(){
        return axios.get(`${Base_url}/configuration`).then(
            (response)=>{
                return response.data                
            },(error)=>{
                console.log(error);
                console.log("error");
            }
        )
    },
    createTray(tray){
        return axios.post(`${Base_url}/order/tray`, tray).then(
            (response)=>{
                return response.data
            },(error)=>{
                console.log(error);
                console.log("error");
            }
        )
    }
}
