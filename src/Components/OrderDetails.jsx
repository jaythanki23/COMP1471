import React, {useEffect, useState} from "react";
import { Button } from "react-bootstrap";
import { OrderApiClient } from "../api/OrderApiClient";
import {TrayApiClient} from '../api/TrayApiClient'
import TrayDetails from './TrayDetails';
import { ERoles } from "./ERoles";

export default function OrderDetails({orderId,role}) {

    console.log("OrderDetails: ", orderId)

    const [trays, setTrays] = useState([])
    const [order, setOrder] = useState()

    useEffect(() => {
        OrderApiClient.getOrder(orderId).then(
            o=>setOrder(o));
      }, [orderId]);

    useEffect(() => {
        if(order == null)
            return;

        TrayApiClient.getAllTraysByOrderId(order.id).then(
            o=>setTrays((o==undefined)?[]:o));
      }, [order]);

    if(order == null)
        return null

    function handleOrderAccept() {
        OrderApiClient.acceptOrder(order.id).then(
            ()=>OrderApiClient.getOrder(orderId).then(
                        o=>setOrder(o)));
    }

    return (
        <div>
            <h1>Order</h1>
            ID: {order.id}
            <br/>
            Customer ID: {order.customerId}
            <br/>
            Accepted: {order.accepted.toString()}
            {(role===ERoles.manager&&!order.accepted)&&(<Button onClick={()=>handleOrderAccept()}>Accept</Button>)}
            <br/>
            Assigned staff member: TODO!!!!!!
            <br/>
            Created: {order.creationDate}
            <br/>
            {trays.map((tray,index) => (
            <TrayDetails key={index} tray={tray}></TrayDetails>
           ))}
        </div>
        
    )
}