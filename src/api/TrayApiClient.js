import axios from 'axios';
import Base_url from "../Url/url";

export const TrayApiClient = {
    getAllTraysByOrderId(id){
        return axios.get(`${Base_url}/order/tray/${id}`).then(
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