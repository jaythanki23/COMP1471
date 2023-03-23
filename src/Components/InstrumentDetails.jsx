import React, {useEffect, useState} from "react";
import SterilizationProcessDetails from './SterilizationProcessDetails'

export default function InstrumentDetails({inst, count, process, role}) {

    console.log("InstrumentDetails: ", inst, " Process: ", process)

    if(inst == null)
        return null

    return (
        <div>
            <h3>{inst.instrumentName}: {count}</h3>
            <SterilizationProcessDetails process={process} role={role}/>
        </div>
    )
}