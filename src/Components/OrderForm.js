import axios from "axios";
import React, { useState } from "react";
import AddDynamicInput from "./AddDynamicInput";

export default function OrderForm() {

    const [order_table, setOrder] = useState({
        customer_id: ""
    });

    const [tray_table, setTray] = useState({
        tray_configuration_id: ""
    })

    const { customer_id } = order_table;

    const onInputChange = (e) => {
        setOrder({ ...order_table, [e.target.customer_id]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/order", order_table);
    };


    return (
        <div className='container'>
            <h1 className='Title' color= "s">Order your trays right now</h1>
            <form onSubmit={(e) => onSubmit(e)}>
                <input
                    type='Id'
                    className='FormInput'
                    name='customerId'
                    placeholder='Customer ID'
                    required
                    onChange={(e) => {
                        setOrder({...order_table, customerId: e.target.value})
                    }}
                />
                <AddDynamicInput
                    onChange={(e) => {
                        setOrder({...tray_table, trayConfigurationId: e.target.value})
                    }}
                />
                <button type='submit' className='SubmitButton'>
                    Submit
                </button>
            </form>
        </div>
    );
}
