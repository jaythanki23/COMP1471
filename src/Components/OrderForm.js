import axios from "axios";
import React, {useEffect, useState} from "react";
import AddDynamicInput from "./AddDynamicInput";

export default function OrderForm() {

    const [operation_table,setOperation] = useState({
    })
    const [tray_config_table, setTrayConfig] = useState({
    })

    const [order_table, setOrder] = useState({
    })

    const [tray_table, setTray] = useState({
        tray_id: "",
        order_table: {
            orderId: "",
            customerId: "",
            creationDate: "",
            accepted: ""
        },
        tray_config_table:{
            trayConfigId: "",
            trayConfigName: ""
        },
        operation_table:{
            operationId: "",
            staffId: "",
            patientID: "",
            creationDate: "",
            successStatus: ""
        }
    })

    const onSubmitOperation = async (e) => {
        e.preventDefault();
         await axios.post("http://localhost:8080/api/operation", operation_table);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/order/tray", tray_table);
    };

    const onSubmitTrays = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/order/tray", tray_table);
    };


    return (
        <div className='container'>
            <h1 className='Title' color= "s">Order your trays right now</h1>
            <form onSubmit={(e) => onSubmit(e)}>
                <input
                    type='Id'
                    className='FormInput'
                    name='staffId'
                    placeholder='Your staff ID'
                    required
                    onChange={(e) => {
                        setTray({...operation_table, staffId: e.target.value})
                    }}
                />
                <input
                    type='id'
                    className='FormInput'
                    name='patientId'
                    placeholder='Patient ID'
                    required
                    onChange={(e) => {
                        setTray({...operation_table, patientId: e.target.value})
                    }}
                />
                <button type='submit' className='SubmitButton'>
                    Submit
                </button>
            </form>
                <form onSubmit={(e) => onSubmit(e)}>
                    <input
                        type='Id'
                        className='FormInput'
                        name='customerId'
                        placeholder='Customer ID'
                        required
                        onChange={(e) => {
                            setTray({...order_table, customerId: e.target.value})
                        }}
                    />
                    <button type='submit' className='SubmitButton'>
                        Submit
                    </button>
                </form>
            <form onSubmit={(e) => onSubmit(e)}>
                <input
                    type='Id'
                    className='FormInput'
                    name='trayId'
                    placeholder='Tray ID'
                    required
                    onChange={(e) => {
                        setTray({...tray_table.tray_config_table, trayConfiguration : e.target.value})
                    }}
                />
                <button type='submit' className='SubmitButton'>
                    Submit
                </button>
            </form>
        </div>
    );
}
