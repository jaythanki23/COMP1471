import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

export default function Manager() {
    let navigate = useNavigate();

    const [orders, setOrders] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadOrders();
    }, []);

    const acceptOrder = async (id) => {
        axios.put(`http://localhost:8080/order/${id}`, true);
        loadOrders();
    }

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
                <thead>
                <tr>
                    <th scope="col">I.D.</th>
                    <th scope="col">Customer I.D.</th>
                    <th scope="col">Creation Date</th>
                    <th scope="col">Has it been accepted?</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order_table, index) => (
                    <tr>
                        <td>{order_table.id}</td>
                        <td>{order_table.customerId}</td>
                        <td>{order_table.creationDate}</td>
                        <td>{order_table.accepted.toString()}</td>
                        <td>
                            <Link
                                className="btn btn-primary mx-2"
                                to={`/view-order/${order_table.id}`}
                            >
                                View
                            </Link>
                            <button
                                className="btn btn-danger mx-2"
                            >
                                Accept
                            </button>
                            <button
                                className="btn btn-danger mx-2"
                                onClick={() => deleteOrder(order_table.id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </div>
        </div>
    )
}

