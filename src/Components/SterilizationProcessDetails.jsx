import React, {useEffect, useState} from "react";
import { InstrumentApiClient } from '../api/InstrumentApiClient';
import InstrumentDetails from './InstrumentDetails';

export default function SterilizationProcessDetails({process, role}) {

    console.log("SterilizationProcessDetails: ", process)

    if(process == null)
        return null

    return (
        <div>
            <h4>Sterilisation: {process.instrumentType.step.stepName}</h4>
            Machine ID: {(process.sterilisation_machine_id===undefined)?"---":process.sterilisation_machine_id}<br/>
            Status: {process.isDone?"In progress":"Done"}<br/>
            Date: {process.date}<br/>
        </div>
    )
}