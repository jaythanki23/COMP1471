import '../../App.css';
import React, {useRef, useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import './Tracking.css'

function Tracking() {

    const [orderId, setOrderId] = useState(undefined)

    const data=useRef();

    return (
        <>
            <div className="container">
                <h1 className="title" color="s">
                    Input your order ID
                </h1>
                <input
                    className="input"
                    ref={data}
                    placeholder="Your order ID"
                    onChange={(e) => setOrderId(e.target.value)}
                />
                <Link to={`/tracking/view-order/${orderId}`}>
                    <Button
                        className="button"
                        >
                        Track
                    </Button>
                </Link>
            </div>
        </>
    );
}
localStorage.clear();

export default Tracking;
