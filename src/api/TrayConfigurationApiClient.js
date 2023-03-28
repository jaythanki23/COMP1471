import axios from 'axios';
import Base_url from "../Url/url";

export const TrayConfigurationApiClient = {
    createTrayConfig(trayConfiguration){
        return axios.post(`${Base_url}/configuration`, trayConfiguration).then(
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
    createInstrumentCount(instCount){
        return axios.post(`${Base_url}/instrument_count`, instCount).then(
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
}
