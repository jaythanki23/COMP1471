import axios from 'axios';
import Base_url from "../Url/url";

export const SterilizationProcessApiClient = {
    getSterilizationProcessById(id){
        return axios.get(`${Base_url}/sterilisation_process/${id}`).then(
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
    getAllSterilizationProcessForTrayId(id){
        console.log("INFO: get all processes for tray:",id)
        return axios.get(`${Base_url}/sterilisation_process/tray/${id}`).then(
            (response)=>{
                // console.log(response);
                // console.log("success");
                console.log("INFO: getProcesses response: ", response)
                return response.data                
            },(error)=>{
                console.log(error);
                console.log("error");
            }
        )
    }
}