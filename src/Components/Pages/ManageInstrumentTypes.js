import '../../App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {OrderApiClient} from "../../api/OrderApiClient";
import {OperationApiClient} from "../../api/OperationApiClient";
import {TrayApiClient} from "../../api/TrayApiClient";
import {InstrumentApiClient} from "../../api/InstrumentApiClient";
import {SterilizationStepApiClient} from "../../api/SterilizationStepApiClient";


export default function ManageInstrumentTypes() {

    const [instruments, setInstruments] = useState([])
    const [steps, setSteps] = useState()
    const [instrumentName, setInstrumentName] = useState()
    const [instrumentType, setInstrumentType] = useState([])
    const [sterilizationInstrumentTypes, setSterilizationInstrumentTypes] = useState([])

    useEffect(() => {
        loadInstruments();
    }, [])
    useEffect(() => {
        InstrumentApiClient.getAllInstrumentTypes().then(
            c => setInstrumentType(c)
        );
    }, []);
    function addInstrument(){
        var instrumentsTmp = instruments.slice();
        instrumentsTmp.push({
            step: {
                id: undefined,
                stepName: undefined
            }
        });
        setInstrumentType(instrumentsTmp);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/instrument_type", instrumentType);
    };

    const loadInstruments= async () => {
        const result = await axios.get(`http://localhost:8080/api/instrument_type`);
        setInstruments(result.data);
    };

    const deleteInstrument = async (id) => {
        await axios.delete(`http://localhost:8080/api/instrument_type/${id}`);
        loadInstruments();
    };

    function submitInstrumentType(){
        InstrumentApiClient.createInstrumentType({
            instrumentType: instrumentType
        }).then((instrument)=>{
            for(var step of steps){
                step.instrument = instrument
                SterilizationStepApiClient.createSterilizationStep(step.instrument)
                            .then((data)=>{
                                console.log("+STEP:",data)
                                setInstrumentType([])
                    })
            }
        })
    }

    return (
        <>
                <input
                    type='text'
                    className='FormInput'
                    name='trayName'
                    placeholder='New instrument type'
                    required
                    onChange={(e) => setInstrumentName(e.target.value)}
                />
                <button type='submit' className='SubmitButton' onClick={(e) => {
                    window.location.reload()
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
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {instruments.map((instrument, index) => (
                            <tr>
                                <td>{instrument.id}</td>
                                <td>{instrument.instrumentName}</td>
                                {instrument.step.stepName == null ?
                                "No step"
                                : instrument.step.stepName}
                                <button
                                    className="btn btn-primary mx-2"
                                    onClick={() => deleteInstrument(instrument.id)}
                                >
                                    Delete Instrument
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
