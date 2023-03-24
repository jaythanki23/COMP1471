import React, {useEffect, useState} from "react";
import { InstrumentApiClient } from '../api/InstrumentApiClient';

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
            {tray.trayConfiguration.trayName}<br/>
        </div>
    )
}