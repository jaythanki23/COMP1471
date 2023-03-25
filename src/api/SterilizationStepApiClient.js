import axios from 'axios';
import Base_url from "../Url/url";

export const SterilizationStepApiClient = {
    getAllSterilizationSteps(){
        return axios.get(`${Base_url}/step/all`).then(
            (response)=>{
                // console.log(response);
                // console.log("success");
                return response.data                
            },(error)=>{
                console.log(error);
                console.log("error");
            }
        )
    }
}