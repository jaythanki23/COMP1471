import '../../App.css';
import React, {useEffect, useState} from "react";
import OrderDetails from "../OrderDetails";
import { OrderApiClient } from '../../api/OrderApiClient';
import { ERoles } from '../ERoles';
import { Button } from "react-bootstrap";

function SterilizationStaff() {

    const [staffId, setStaffId] = useState(undefined)
    const [orders, setOrders] = useState([])


    function loadOrders(){
        if(staffId === undefined)
            return;

        OrderApiClient.getOrdersByStaffId(staffId).then(
            (o)=>{
                if(o===undefined){
                    return;
                }
                setOrders(o)
            }
        );
    }

    return (
        <div>
            Enter your staff ID:
            <input
                type='number'
                name='staffId'
                placeholder='Staff ID'
                value = {staffId}
                onChange={(e) => setStaffId(e.target.value)}
            />
            <Button onClick={()=>loadOrders()}>Load</Button>

            {orders.map((o,index) => (
                <OrderDetails key={index} orderId={o.id} role={ERoles.sterilizationStaff}/>
            ))}


        </div>
    );
}

export default SterilizationStaff;