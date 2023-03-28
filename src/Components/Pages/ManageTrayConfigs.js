import '../../App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {TrayApiClient} from "../../api/TrayApiClient";

export default function ManageTrayConfigs() {
    const [instruments, setInstruments] = useState([]) //available instruments
    const [trayConfigurations, setTrayConfigurations] = useState([]) // available tray configurations

    const [trayName, setTrayName] = useState() //name of new tray configuration
    const [instrumentIndex, setInstrumentIndex] = useState(0);

    useEffect(() => {
        loadTrayConfigurations();
    },[])
    useEffect(() => {
        loadInstruments();
    }, [])

    const loadTrayConfigurations= async () => {
        const result = await axios.get(`http://localhost:8080/api/configuration`);
        setTrayConfigurations(result.data);
    };
    const loadInstruments= async () => {
        const result = await axios.get(`http://localhost:8080/api/instrument_type`);
        setInstruments(result.data);
    };

    const deleteTrayConfiguration = async (id) => {
        await axios.delete(`http://localhost:8080/api/configuration/${id}`);
        loadTrayConfigurations();
    };

    function submitConfigurationType(){
        TrayApiClient.createTrayConfig({
            trayName: trayName,
            instrument: instruments[instrumentIndex]
        }).then((response)=>{
            console.log("Tray response:", response)
            setTrayName("")
            loadTrayConfigurations()
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
                value = {trayName}
                onChange={(e) => setTrayName(e.target.value)}
            />
            <select value={instrumentIndex} onChange={(e) => {setInstrumentIndex(e.target.value)}}>
                {instruments.map((instrument,index) => (
                    <option key={index} value={index}>{instrument.instrumentName}</option>
                ))}
            </select>
            <button type='submit' className='SubmitButton' onClick={(e) => {
                submitConfigurationType()
            }}>
                Submit
            </button>
            <div className="container">
                <div className="py-4">
                    <table className="table border shadow">
                        <thead>
                        <tr>
                            <th scope="col">Tray Configuration ID</th>
                            <th scope="col">Name</th>
                        </tr>
                        </thead>
                        <tbody>
                        {trayConfigurations.map((trayC, index) => (
                            <tr>
                                <td>{trayC.id}</td>
                                <td>{trayC.trayName}</td>
                                <Link
                                    className="btn btn-primary mx-2"
                                    to={`/manager/manage/configs/${trayC.id}`}
                                >
                                    View
                                </Link>
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
