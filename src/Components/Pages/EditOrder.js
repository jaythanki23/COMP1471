import React, { useEffect, useState } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {OrderApiClient} from "../../api/OrderApiClient";
import {TrayApiClient} from "../../api/TrayApiClient";
import TrayDetails from "../TrayDetails";
import {ERoles} from "../ERoles";
import {Button} from "react-bootstrap";
import axios from "axios";

export default function EditOrder({orderId, role}) {
    let navigate = useNavigate();

    const [order, setOrder] = useState({
        staff: {
            id: "",
            staffName: ""
        }
    });
    const [staff, setStaff] = useState([])
    const [trays, setTrays] = useState([])

    const { id } = useParams();

    useEffect(() => {
        loadOrder();
    }, []);
    useEffect(() => {
        loadStaff();
    },[]);

    useEffect(() => {
        if(order == null)
            return;

        TrayApiClient.getAllTraysByOrderId(order.id).then(
            o=>setTrays((o==undefined)?[]:o));
    }, [order]);


    const loadOrder = async () => {
        const result = await axios.get(`http://localhost:8080/api/order/${id}`);
        setOrder(result.data);
    };
    const loadStaff = async() => {
        const result = await axios.get(`http://localhost:8080/api/order/staff/${id}`)
        setStaff(result.data);
    };


    const deleteOrder = async (id) => {
        await axios.delete(`http://localhost:8080/api/order/${id}`);
        navigate("/");
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/order/assign_staff/${id}`, staff);
    };

    function handleOrderAccept() {
        OrderApiClient.acceptOrder(order.id).then(
            ()=>OrderApiClient.getOrder(order.id).then(
                o=>setOrder(o)));
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="header">Order Details</h2>
                    <div className="card">
                        <div className="list-group-title">
                            Details of order : {order.id}
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <b>Customer ID: </b>
                                    {order.customerId}
                                </li>
                                <li className="list-group-item">
                                    <b>Date of order:</b>
                                    {order.creationDate}
                                </li>
                                <li className="list-group-item">
                                    <b>Status: </b>
                                    {order.accepted === false ?
                                        "Order not yet accepted"
                                        : "Order has been accepted"}
                                    {order.accepted === false ?
                                        <Button onClick={()=>handleOrderAccept()}>Accept</Button>
                                        : null}
                                </li>
                                <li>
                                <b>Assign a staff member: </b>
                                </li>
                                <form onSubmit={(e) => onSubmit(e)}>
                                    <input
                                        type='id'
                                        className='FormInput'
                                        name='staffId'
                                        placeholder='Assign'
                                        required
                                        onChange={(e) => {
                                            setStaff({...staff, id: e.target.value})
                                        }}
                                    />
                                    <button type='submit' className='SubmitButton'>
                                        Submit
                                    </button>
                            </form>
                                <li className="list-group-item">
                                    <b>Trays ordered: </b>
                                    {trays.map((tray,index) => (
                                        <TrayDetails key={index} tray={tray}></TrayDetails>
                                    ))}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/manager"}>
                        Back to See all orders
                    </Link>
                </div>
            </div>
        </div>
    )
}
