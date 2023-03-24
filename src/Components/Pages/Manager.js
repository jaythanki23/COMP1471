import '../../App.css';
import { OrderApiClient } from '../../api/OrderApiClient';
import React from "react";
import OrderDetails from "../OrderDetails";
import { ERoles } from '../ERoles';

function Manager() {

    const orderId = 1;

    return (
        <>
            <OrderDetails orderId={orderId} role={ERoles.manager}/>
        </>
    );
}

export default Manager;