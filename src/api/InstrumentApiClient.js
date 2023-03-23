import axios from 'axios';
import Base_url from "../Url/url";

export const InstrumentApiClient = {
    getInstrumentCountsForConfigId(id){
        return axios.get(`${Base_url}/instrument_count/tray_config/${id}`).then(
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
    getInstrumentTypebyId(id){
        return axios.get(`${Base_url}/instrument_type/${id}`).then(
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