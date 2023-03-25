import '../../App.css';
import OrderForm from "../OrderForm";
import React from "react";
import '../OrderForm.css'
import './HospitalStaff.css'

function HospitalStaff() {
    return (
        <>
            <button
                type="button"
                className="button"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://localhost:3000/tracking';
                }}
            > Track your order</button>
            <OrderForm />
        </>
    );
}

export default HospitalStaff;