import React, {useEffect, useState} from "react";
import { SterilizationProcessApiClient } from '../api/SterilizationProcessApiClient';
import SterilizationProcessDetails from './SterilizationProcessDetails'

export default function InstrumentDetails({inst, count, role}) {

    console.log("InstrumentDetails: ", inst)

    const [process, setProcess] = useState()

    useEffect(() => {
        SterilizationProcessApiClient.getSterilizationProcessById(1).then(
            o=>filterProcess(o));
    }, []);

    function filterProcess(p){
        if(p.instrumentType.id === inst.id)
        {
            setProcess(p)
        }
    }
    if(inst == null)
        return null

    return (
        <div>
            <h3>{inst.instrumentName}: {count}</h3>
            <SterilizationProcessDetails process={process} role={role}/>
        </div>
    )
}