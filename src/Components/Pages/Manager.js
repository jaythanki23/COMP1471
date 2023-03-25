import '../../App.css';
import React, {useEffect, useState} from "react";
import OrderDetails from "../OrderDetails";
import { OrderApiClient } from '../../api/OrderApiClient';
import { ERoles } from '../ERoles';

function Manager() {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        OrderApiClient.getAllOrders().then(
            o=>setOrders(o));
      }, []);

    return (
        <>
            {orders.map((o,index) => (
                <OrderDetails key={index} orderId={o.id} role={ERoles.manager}/>
            ))}
        </>
    );
}

export default Manager;