import React, {useEffect, useState} from "react";
import DatePicker from 'react-date-picker';

export default function NewTray({tray, trayConfigs}) {
    console.log("NEW TRAY ", tray, trayConfigs)
    
    const [opDate, setOpDate] = useState();
    const [configIndex, setConfigIndex] = useState();

    function setConfig(index){
        console.log("setConfig ",index);
        tray.trayConfiguration = trayConfigs[index];
        console.log("tray.trayConfiguration ",tray.trayConfiguration);
        setConfigIndex(index)
    }

    function onDateChange(date){
        tray.operation.creationDate = date
        setOpDate(date)
    }

    function setOpSuccessStatus(){
        tray.operation.successStatus = !tray.operation.successStatus
    }

    return (
        <div>
            <h2>New Tray</h2>
            Tray type: <select value={configIndex} onChange={(e) => {setConfig(e.target.value)}}>
                {trayConfigs.map((tc,index) => (
                    <option key={index} value={index}>{tc.trayName}</option>
                ))}
            </select>

            <h3>Operation</h3>
            Operation ID: <input
                    type='number'
                    name='opId'
                    placeholder='ID of the operation'
                    value = {tray.operation.id}
                    onChange={(e) => {tray.operation.id  = e.target.value}}
                /> <br/>
            Doctor ID: <input
                    type='number'
                    name='drId'
                    placeholder='ID of operating doctor'
                    value = {tray.operation.staffId}
                    onChange={(e) => {tray.operation.staffId  = e.target.value}}
                /> <br/>
            Patient ID: <input
                    type='number'
                    name='patientId'
                    placeholder='ID of the patient'
                    value = {tray.operation.patientId}
                    onChange={(e) => {tray.operation.patientId  = e.target.value}}
                /> <br/>
            Date: <DatePicker onChange={onDateChange} value={opDate} /> <br/>
            Success status:<input 
                    type="checkbox"
                    value = {tray.operation.successStatus}
                    onChange={(e) => setOpSuccessStatus()}
                 />
        </div>
        
    )
}