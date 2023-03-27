import axios from "axios";
import React, { useEffect,useState } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {InstrumentApiClient} from "../../api/InstrumentApiClient";
import {TrayApiClient} from "../../api/TrayApiClient";
import InstrumentDetails from "../InstrumentDetails";
import {SterilizationProcessApiClient} from "../../api/SterilizationProcessApiClient";
import TrayType from "../TrayType";
import TrayDetails from "../TrayDetails";

export default function ViewTrayConfig({tray,role}) {

    let navigate = useNavigate();

    const [trayConfiguration, setTrayConfiguration] = useState([]);
    const [instrumentType, setInstrumentType] = useState([]);
    const [instrumentC, setInstrumentC] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadTrayConfiguration();
    }, []);

    useEffect(() => {
        loadInstrumentType();
    },[]);

    useEffect(() => {
        loadInstrumentC();
    }, []);


    const loadTrayConfiguration = async () => {
        const result = await axios.get(`http://localhost:8080/api/configuration/${id}`);
        setTrayConfiguration(result.data);
    };

    const loadInstrumentType = async () => {
        const result = await axios.get(`http://localhost:8080/api/instrument_type/${id}`);
        setInstrumentType(result.data);
    };

    const loadInstrumentC = async () => {
        const result = await axios.get(`http://localhost:8080/api/instrument_count/tray_config/${id}`);
        setInstrumentC(result.data);
    };

    useEffect(() => {
        if(trayConfiguration == null)
            return;

        InstrumentApiClient.getInstrumentCountsForConfigId(trayConfiguration.id).then(
            o=>setInstrumentC((o==undefined)?[]:o));
    }, [trayConfiguration]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="header">Tray Details</h2>
                    <div className="card">
                            <div className="list-group-title">
                                Details of tray : {trayConfiguration.id}
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <b>Tray configuration name: </b>
                                        {trayConfiguration.trayName}
                                    </li>
                                    <li className="list-group-item">
                                        <b>Instruments: </b>
                                            <thead>
                                            <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Count</th>
                                            <th scope="col">Sterilization Step</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {instrumentC.map((instC, index) => (
                                                <tr>
                                                <td>{instC.instrumentType.instrumentName}</td>
                                                <td>{instC.instrumentCount}</td>
                                                <td>{instC.instrumentType.step.stepName}</td>
                                            </tr>
                                            ))}
                                            </tbody>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/manager/manage/configs"}>
                        Back to Configs
                    </Link>
                </div>
            </div>
        </div>
    );
}
