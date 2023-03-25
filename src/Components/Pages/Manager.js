import '../../App.css';
import React, {useEffect, useState} from "react";
import OrderDetails from "../OrderDetails";
import { OrderApiClient } from '../../api/OrderApiClient';
import { ERoles } from '../ERoles';

function Manager() {

    const orderId = 1;

    return (
        <>
            <OrderDetails orderId={orderId} role={ERoles.Manager}/>
        </>
    );
}

export default Manager;