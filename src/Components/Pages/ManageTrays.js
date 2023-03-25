import '../../App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import TrayType from "../TrayType";
import {Link, useParams} from "react-router-dom";

export default function ManageTrays() {

    const [tray_configuration_table, setTrayConfig] = useState({});

    const {id} = useParams();

    const [trays, setTrays] = useState([]);

    useEffect(() => {
        loadTrays();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/configuration", tray_configuration_table);
    };

    const loadTrays = async () => {
        const result = await axios.get(`http://localhost:8080/api/configuration`);
        setTrays(result.data);
    };

    const deleteTray = async (id) => {
        await axios.delete(`http://localhost:8080/api/configuration/${id}`);
        loadTrays();
    };

    return (
        <>
            <form onSubmit={(e) => onSubmit(e)}>
                <input
                    type='text'
                    className='FormInput'
                    name='trayName'
                    placeholder='New tray configuration name'
                    required
                    onChange={(e) => {
                        setTrayConfig({...tray_configuration_table, trayName: e.target.value})
                    }}
                />
                <button type='submit' className='SubmitButton' onClick={(e) => {
                    window.location.reload()
                }}>
                    Submit
                </button>
            </form>
            <div className="container">
                <div className="py-4">
                    <table className="table border shadow">
                        <thead>
                        <tr>
                            <th scope="col">Tray ID</th>
                            <th scope="col">Tray Name</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {trays.map((tray, index) => (
                            <tr>
                                <td>{tray.id}</td>
                                <td>{tray.trayName}</td>
                                <Link
                                    className="btn btn-primary mx-2"
                                    to={`/manager/manage/trays/${tray.id}`}
                                >
                                    Edit
                                </Link>
                                <button
                                    className="btn btn-primary mx-2"
                                    onClick={() => deleteTray(tray.id)}
                                >
                                    Delete
                                </button>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
