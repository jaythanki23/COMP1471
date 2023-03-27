import '../../App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import {InstrumentApiClient} from "../../api/InstrumentApiClient";
import {Button} from "react-bootstrap";
import {TrayApiClient} from "../../api/TrayApiClient";
import NewTray from "../NewTray";
import {OrderApiClient} from "../../api/OrderApiClient";
import {OperationApiClient} from "../../api/OperationApiClient";
import {SterilizationStepApiClient} from "../../api/SterilizationStepApiClient";

export default function ManageInstrumentTypes() {

    const [sterilizationSteps, setSterilizationSteps] = useState([]) // available steps
    const [instruments, setInstruments] = useState([]) //available instruments

    const [instrumentName, setInstrumentName] = useState() //name of new instrument
    const [stepIndex, setStepIndex] = useState(0);

    useEffect(() => {
        loadInstruments();
    }, [])
    useEffect(() => {
        loadSterilizationSteps();
    },[])

    const loadInstruments= async () => {
        const result = await axios.get(`http://localhost:8080/api/instrument_type`);
        setInstruments(result.data);
    };
    const loadSterilizationSteps= async () => {
        const result = await axios.get(`http://localhost:8080/api/step/all`);
        setSterilizationSteps(result.data);
    };

    const deleteInstrument = async (id) => {
        await axios.delete(`http://localhost:8080/api/instrument_type/${id}`);
        loadInstruments();
    };

    function submitInstrumentType(){
        InstrumentApiClient.createInstrumentType({
            instrumentName: instrumentName,
            step: sterilizationSteps[stepIndex]
        }).then((response)=>{
            console.log("Inst response:", response)
            setInstrumentName("")
            loadInstruments()
        })
    }

    return (
        <>
            <input
                type='text'
                className='FormInput'
                name='instrumentName'
                placeholder='New instrument type'
                required
                value = {instrumentName}
                onChange={(e) => setInstrumentName(e.target.value)}
            />
            <select value={stepIndex} onChange={(e) => {setStepIndex(e.target.value)}}>
                {sterilizationSteps.map((ss,index) => (
                    <option key={index} value={index}>{ss.stepName}</option>
                ))}
            </select>
            <button type='submit' className='SubmitButton' onClick={(e) => {
                submitInstrumentType()
            }}>
                Submit
            </button>
            <div className="container">
                <div className="py-4">
                    <table className="table border shadow">
                        <thead>
                        <tr>
                            <th scope="col">Instrument ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Sterilization Step</th>
                        </tr>
                        </thead>
                        <tbody>
                        {instruments.map((instrument, index) => (
                            <tr>
                                <td>{instrument.id}</td>
                                <td>{instrument.instrumentName}</td>
                                <td>{instrument.step.stepName}</td>
                                <button
                                    className="btn btn-primary mx-2"
                                    onClick={() => deleteInstrument(instrument.id)}
                                >
                                    Delete
                                </button>
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
    );
}
