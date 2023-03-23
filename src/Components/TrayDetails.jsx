import React, {useEffect, useState} from "react";
import { InstrumentApiClient } from '../api/InstrumentApiClient';
import { SterilizationProcessApiClient } from '../api/SterilizationProcessApiClient';
import InstrumentDetails from './InstrumentDetails';

export default function TrayDetails({tray,role}) {

    console.log("TrayDetails: ", tray)

    const [instC, setInstC] = useState([])
    const [processes, setProcesses] = useState([])

    useEffect(() => {
        InstrumentApiClient.getInstrumentCountsForConfigId(tray.trayConfiguration.id).then(
            o=>setInstC(o));
        SterilizationProcessApiClient.getAllSterilizationProcessForTrayId(tray.id).then(
            o=>setProcesses(o));
      }, [tray]);

    function findProcessForInst(inst){
        var ret = null;
        for (var p of processes){
            console.log("p:", p, " processes: ", processes)
            if(p.instrumentType.id === inst.id){
                ret = p;
            }
        }
        console.log("FIND: returning: ", ret)
        return ret;
    }

    if(tray == null)
        return null

    return (
        <div>
            <h2>Tray</h2>
            ID: {tray.id} <br/>
            Type: {tray.trayConfiguration.trayName}<br/>
            <strong>Contents</strong><br/>
            {instC.map((ic,index) => (
                <InstrumentDetails key={index} inst={ic.instrumentType} count={ic.instrumentCount} process={findProcessForInst(ic.instrumentType)} role={role}/>
           ))}
        </div>
    )
}