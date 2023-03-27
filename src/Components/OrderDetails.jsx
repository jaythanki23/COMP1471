import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {Button} from "react-bootstrap";
import {ERoles} from "./ERoles";

export default function OrderDetails(role) {
    const [orders, setOrders] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        const result = await axios.get("http://localhost:8080/api/order");
        setOrders(result.data);
    };

    const deleteOrder = async (id) => {
        await axios.delete(`http://localhost:8080/api/order/${id}`);
        loadOrders();
    };


    return (
        <div className="container">
            <div className="py-4">
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Customer ID</th>
                        <th scope="col">Accepted</th>
                        <th scope="col">Creation Date</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map((order, index) => (
                        <tr>
                            <td>{order.id}</td>
                            <td>{order.customerId}</td>
                            <td>
                                {order.accepted.toString()}
                            </td>
                            <td>{order.creationDate}</td>
                            <td>
                                <Link
                                    className="btn btn-primary mx-2"
                                    to={`/manager/edit-order/${order.id}`}
                                >
                                    View
                                </Link>
                                {order.accepted === false ?
                                    <button
                                        onClick={() => deleteOrder(order.id)}
                                    >
                                        Cancel
                                    </button>
                                    : null}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
