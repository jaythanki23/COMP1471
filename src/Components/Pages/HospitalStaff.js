import '../../App.css';
import React from "react";
import './HospitalStaff.css';
import CreateOrder from "../CreateOrder";

function HospitalStaff() {
    return (
        <>
            <button
                type="button"
                className="SubmitButton"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://localhost:3000/tracking';
                }}
            > Track your order</button>
            <CreateOrder />
        </>
    );
}

export default HospitalStaff;
