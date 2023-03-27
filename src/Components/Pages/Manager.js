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
            <button
                type="button"
                className="button"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://localhost:3000/manager/manage';
                }}
            > Manage tray configurations, instruments and sterilization processes</button>
        </>
    );
}

export default Manager;
