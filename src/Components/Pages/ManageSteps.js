import '../../App.css';
import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";

export default function ManageSteps() {

    const [steps, setSteps] = useState([])
    const [sterilizationStep, setSterilizationSteps] = useState({})

    useEffect(() => {
        loadSteps();
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/step", sterilizationStep);
    }

    const loadSteps = async () => {
        const result = await axios.get(`http://localhost:8080/api/step/all`);
        setSteps(result.data);
    }

    return (
        <>
            <>
                <form onSubmit={(e) => onSubmit(e)}>
                    <input
                        type='text'
                        className='FormInput'
                        name='trayName'
                        placeholder='New sterilization step name'
                        required
                        onChange={(e) => {
                            setSterilizationSteps({...sterilizationStep, stepName: e.target.value})
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
                                <th scope="col">Step ID</th>
                                <th scope="col">Step name</th>
                            </tr>
                            </thead>
                            <tbody>
                            {steps.map((step, index) => (
                                <tr>
                                    <td>{step.id}</td>
                                    <td>{step.stepName}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to={"/manager/manage"}>
                    Back to Manage All
                </Link>
            </>
        </>
    );
}
