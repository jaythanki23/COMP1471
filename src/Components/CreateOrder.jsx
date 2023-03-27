import React, {useEffect, useState} from "react";
import { Button } from "react-bootstrap";
import { OrderApiClient } from "../api/OrderApiClient";
import {TrayApiClient} from '../api/TrayApiClient'
import NewTray from './NewTray';
import './CreateOrder.css'
import { DateTime } from 'luxon';
import { OperationApiClient } from "../api/OperationApiClient";

export default function CreateOrder() {

    const [trayConfigs, setTrayConfigs] = useState([])
    const [customerId, setCustomerId] = useState()
    const [date, setDate] = useState()
    const [trays, setTrays] = useState([])

    useEffect(() => {
        TrayApiClient.getAllTrayConfigs().then(
            c => setTrayConfigs(c)
        );
    }, []);

    function addTray(){
        var traysTmp = trays.slice();
        traysTmp.push({
            order: {},
            trayConfiguration: trayConfigs.length>0?trayConfigs[0]:undefined,
            operation: {
                id: undefined,
                staffId: undefined,
                patientId: undefined,
                successStatus: false,
                creationDate: undefined
            }
        });
        setTrays(traysTmp);
    }

    function submitOrder(){
        OrderApiClient.createOrder({
            customerId: customerId//,
            //  creationDate: DateTime.fromISO(new Date().toISOString()).toISO()
        }).then((order)=>{
            for(var tray of trays){
                tray.order = order
                OperationApiClient.createOperation(tray.operation)
                    .then(() => {
                        TrayApiClient.createTray(tray)
                            .then((data)=>{
                                console.log("+TRAY:",data)
                                setTrays([])
                            })
                    })
            }
        })
    }

    return (
        <div className="container">
            <h1>Create a new order</h1>
            Customer ID: <input
            type='number'
            name='customer'
            placeholder='Enter your customer ID'
            required
            className="FormInput"
            value = {customerId}
            onChange={(e) => setCustomerId(parseInt(e.target.value))}
        /> <br/>
            {/* Date: <DatePicker onChange={setDate} value={date} /> */}
            <br/>

            {trays.map((t,index) => (
                <NewTray key={index} tray={t} trayConfigs={trayConfigs}/>
            ))}

            <br/>
            <Button className="SubmitButton" onClick={()=>addTray()}>Add tray</Button>
            <br/>
            <Button className="SubmitButton" onClick={()=>submitOrder()}>Submit order</Button>

        </div>

    )
}
