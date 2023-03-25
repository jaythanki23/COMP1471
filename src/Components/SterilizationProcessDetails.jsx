import React, {useEffect, useState} from "react";
import { InstrumentApiClient } from '../api/InstrumentApiClient';
import InstrumentDetails from './InstrumentDetails';
import DatePicker from 'react-date-picker';
import { ERoles} from "./ERoles"
import { Button } from "react-bootstrap";
import { SterilizationProcessApiClient } from "../api/SterilizationProcessApiClient";

export default function SterilizationProcessDetails({process, role}) {

    console.log("SterilizationProcessDetails: ", process)

    if(process == null)
        return null

    const [date, onChangeDate] = useState(new Date());
    const [proc, setProcess] = useState(process);
      
    function setStatus() {
        SterilizationProcessApiClient.setProcessStatusToDone(proc.id).then(
            ()=>SterilizationProcessApiClient.getSterilizationProcessById(proc.id).then(
                        o=>setProcess(o)));
    }

    function setDate() {
        SterilizationProcessApiClient.setProcessDate(proc.id, date).then(
            ()=>SterilizationProcessApiClient.getSterilizationProcessById(proc.id).then(
                        o=>setProcess(o)));
    }

    return (
        <div>
            <h4>Sterilisation: {proc.instrumentType.step.stepName}</h4>
            Machine ID: {(proc.sterilisation_machine_id===null)?"---":proc.sterilisation_machine_id}<br/>
            Status: {proc.done?"Done":"In progress"}
            {(role===ERoles.SterilizationStaff&&!proc.done)&&(<Button onClick={()=>{setStatus()}}>Set Done</Button>)}
            <br/>
            Date: {proc.date}
            {role===ERoles.SterilizationStaff&&<DatePicker onChange={onChangeDate} value={date} />}
            {role===ERoles.SterilizationStaff&&(<Button onClick={()=>setDate()}>Set Date</Button>)}
            <br/>
        </div>
    )
}