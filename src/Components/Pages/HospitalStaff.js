import '../../App.css';
import OrderForm from "../OrderForm";
import React from "react";
import '../OrderForm.css'
import {Link} from "react-router-dom";

function HospitalStaff() {
    return (
        <>
            <Link
            to={'/tracking'}>
                Track your order
            </Link>
            <OrderForm />
        </>
    );
}

export default HospitalStaff;