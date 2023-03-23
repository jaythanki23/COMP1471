import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditOrder() {
    let navigate = useNavigate();

    const { id } = useParams();

    const [order, setOrder] = useState({
        accepted: "",
        creation_date: "",
        customer_id: ""
    });

    const { accepted, creation_date, customer_id } = order;

    const onInputChange = (e) => {
        setOrder({ ...order, [e.target.id]: e.target.value });
    };

    useEffect(() => {
        loadOrder();
    }, []);

    const toggleChecked = () => setOrder(value => !value);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/order/${id}`, order);
        navigate("/");
    };

    const loadOrder = async () => {
        const result = await axios.get(`http://localhost:8080/order/${id}`);
        setOrder(result.data);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit User</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <td>{order.customer_id}</td>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Has is been accepted?
                            </label>
                            <input
                                type='boolean'
                                className='FormInput'
                                name='accepted'
                                placeholder='Accept the order'
                                required
                                onSubmit={(e) => {
                                    setOrder({...order, accepted: {toggleChecked}})
                                }}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
