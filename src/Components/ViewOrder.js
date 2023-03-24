import axios from "axios";
import React, { useEffect,useState } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import './ViewOrder.css'

export default function ViewOrder() {

    let navigate = useNavigate();

    const [order, setOrder] = useState({
        id: "",
        accepted: "",
        creation_date: "",
        customer_id: ""
    });

    const [tray, setTray] = useState( {
        id: "",
        tray_id: "",
        tray_configuration_id: "",
        operation_id: ""
    })

    const { id } = useParams();

    useEffect(() => {
        loadOrder();
    }, []);

    const loadOrder = async () => {
        const result = await axios.get(`http://localhost:8080/api/order/${id}`);
        setOrder(result.data);
    };

    const loadTrays = async () => {
        const trayResult = await axios.get(`http://localhost:8080/api/order/tray/${id}`)
        setTray(trayResult.data);
    }

    const deleteOrder = async (id) => {
        await axios.delete(`http://localhost:8080/api/order/${id}`);
        navigate("/");
        };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="header">Order Details</h2>
                    <div className="card">
                        {order.id == null ?
                            "Order does not exist"
                            :
                            <div className="list-group-title">
                                Details of order : {order.id}
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <b>Date of order: </b>
                                        {order.creationDate}
                                    </li>
                                    <li className="list-group-item">
                                        <b>Customer ID: </b>
                                        {order.customerId}
                                    </li>
                                    <li className="list-group-item">
                                        <b>Status: </b>
                                        {order.accepted === false ?
                                            "Order not yet accepted"
                                            : "Order has been accepted"}
                                    </li>
                                    <li className="list-group-item">
                                        <b>Trays ordered: </b>
                                            {(tray.tray_configuration_id)}
                                    </li>
                                    {order.accepted === false ?
                                        <button
                                            className="button"
                                            onClick={() => deleteOrder(order.id)}
                                        >
                                            Cancel order
                                        </button>
                                        : null}
                                </ul>
                            </div>
                        }
                    </div>
                    <Link className="btn btn-primary my-2" to={"/tracking"}>
                        Back to Tracking
                    </Link>
                </div>
            </div>
        </div>
    );
}
