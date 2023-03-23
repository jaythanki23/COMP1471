import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewOrder() {
    const [order, setOrder] = useState({
        id: "",
        accepted: "",
        creation_date: "",
        customer_id: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadOrder();
    }, []);

    const loadOrder = async () => {
        const result = await axios.get(`http://localhost:8080/api/order/${id}`);
        setOrder(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Order Details</h2>
                    <div className="card">
                        <div className="card-header">
                            Details of order id : {order.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Date of order: </b>
                                    {order.creationDate}
                                </li>
                                <li className="list-group-item">
                                    <b>Customer id: </b>
                                    {order.customerId}
                                </li>
                                <li className="list-group-item">
                                    <b>Has is been accepted? </b>
                                    {order.accepted.toString()}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
