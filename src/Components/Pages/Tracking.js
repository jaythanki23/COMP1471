import '../../App.css';
import React, {useRef} from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import './Tracking.css'

function Tracking() {

    const data=useRef();

    const handleClick=()=>{
        console.log(data.current.value,"initial value")
        localStorage.setItem("inputValue",data.current.value)
    }

    console.log(localStorage.getItem(1),)

    var retrievedObject = localStorage.getItem("inputValue");

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
                />
                <Link to={`/tracking/view-order/${JSON.parse(retrievedObject)}`}>
                    <Button
                        className="button"
                        onClick={handleClick}
                        >
                        Track
                    </Button>
                </Link>
            </div>
        </>
    );
}

export default Tracking;
