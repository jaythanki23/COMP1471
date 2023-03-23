import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import './Tracking.css';


export default function Tracking() {

    const [orders, setOrders] = useState([]);

    const { id } = useParams();

    const [showButton, setShowButton] = useState()

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        const result = await axios.get("http://localhost:8080/api/order");
        setOrders(result.data);
    };

    const deleteOrders = async (id) => {
        await axios.delete(`http://localhost:8080/api/order/${id}`);
        loadOrders();
    };

    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                    <tr className="rows">
                    <th scope="col">I.D.</th>
                    <th scope="col">Customer I.D.</th>
                    <th scope="col">Creation Date</th>
                    <th scope="col">Has it been accepted?</th>
                    <th scope="col">View</th>
                    <th scope="col">Cancel unaccepted order?</th>
                    </tr>
                    </thead>
                <tbody className="body">
                {orders.map((order_table, index) => (
                    <tr>
                        <td className="table_text">{order_table.id}</td>
                        <td className="table_text">{order_table.customerId}</td>
                        <td className="table_text">{order_table.creationDate}</td>
                        <td className="table_text">{order_table.accepted.toString()}</td>
                        <td className="table_text">
                            <Link
                                className="btn btn-primary mx-2"
                                to={`/view-order/${order_table.id}`}
                            >
                                View
                            </Link>
                            { order_table.accepted === false ?
                                    <button
                                        className="btn btn-danger mx-2"
                                        onClick={() => deleteOrders(order_table.id)}
                                        >
                                        Cancel order
                                    </button>
                                : null }
                        </td>
                    </tr>
                ))}
                </tbody>
                </table>
            </div>
        </div>
    )
}