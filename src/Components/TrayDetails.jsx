import React, {useEffect, useState} from "react";
import { InstrumentApiClient } from '../api/InstrumentApiClient';
import InstrumentDetails from './InstrumentDetails';

export default function TrayDetails({tray,role}) {

    console.log("TrayDetails: ", tray)

    const [instC, setInstC] = useState([])

    useEffect(() => {
        InstrumentApiClient.getInstrumentCountsForConfigId(tray.trayConfiguration.id).then(
            o=>setInstC(o));
    }, [tray]);

    if(tray == null)
        return null

    return (
        <div>
            <h2>Tray</h2>
            ID: {tray.id} <br/>
            Type: {tray.trayConfiguration.trayName}<br/>
            <strong>Contents</strong><br/>
            {instC.map((ic,index) => (
                <InstrumentDetails key={index} inst={ic.instrumentType} count={ic.instrumentCount} role={role}/>
            ))}
        </div>
    )
}