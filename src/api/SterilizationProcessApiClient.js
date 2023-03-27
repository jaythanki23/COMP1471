import axios from 'axios';
import { DateTime } from 'luxon';
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
    },
    createSterilizationProcess(instrumentType){
        return axios.post(`${Base_url}/instrument_type`, instrumentType).then(
            (response)=>{
                console.log(response);
                console.log("success");
                return response.data
            },(error)=>{
                console.log(error);
                console.log("error");
            }
        )
    },
    setProcessStatusToDone(id){
        return axios.put(`${Base_url}/sterilisation_process/status/${id}`).then(
            (response)=>{
                // console.log(response);
                // console.log("success");
            },(error)=>{
                console.log(error);
                console.log("error");
            }
        )
    },
    setProcessDate(id,date){
        console.log("UPDATE DATE to: ", DateTime.fromISO(date.toISOString()).toISO())
        return axios.put(`${Base_url}/sterilisation_process/date/${id}`, 
        {params: {date: DateTime.fromISO(date.toISOString()).toISO()}}).then(
            (response)=>{
                // console.log(response);
                // console.log("success");
            },(error)=>{
                console.log(error);
                console.log("error");
            }
        )
    }
}
