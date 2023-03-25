import '../../App.css';
import React, {useEffect, useState} from "react";
import OrderDetails from "../OrderDetails";
import { OrderApiClient } from '../../api/OrderApiClient';
import { ERoles } from '../ERoles';

function SterilizationStaff() {

    const [staffId, setStaffId] = useState(undefined)
    const [orders, setOrders] = useState([])


    function loadOrders(){
        if(staffId === undefined)
            return;

        OrderApiClient.getOrderByStaffId(staffId).then(
            o=>setOrders(o));
    }

    return (
        <div>
            <form onSubmit={() => loadOrders()}>
                <input
                    type='number'
                    className='FormInput'
                    name='staffId'
                    placeholder='Enter your staff ID'
                    required
                    value = {staffId}
                    onChange={(e) => setStaffId(e.target.value)}
                />
                <button type='submit' className='SubmitButton'>
                    Load
                </button>
            </form>

            {orders.map((o,index) => (
                <OrderDetails key={index} orderId={o.id} role={ERoles.sterilizationStaff}/>
            ))}
        </div>
    );
}

export default SterilizationStaff;