import axios from 'axios';
import Base_url from "../Url/url";

export const OperationApiClient = {
    createOperation(operation){
        return axios.post(`${Base_url}/operation/ `, operation).then(
            (response)=>{
                return response.data
            },(error)=>{
                console.log(error);
                console.log("error");
            }
        )
    }
}