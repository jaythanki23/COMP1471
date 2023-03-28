import axios from "axios";
import React, { useEffect,useState } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import InstrumentDetails from "../InstrumentDetails";
import {InstrumentApiClient} from "../../api/InstrumentApiClient";

export default function ViewTrayConfig() {

    let navigate = useNavigate();
    const [instC, setInstC] = useState([])

    const [trayConfig, setTrayConfig] = useState({
        id: "",
        trayName: ""
    });

    const [instruments, setInstruments] = useState([]
    )

    const { id } = useParams();

    useEffect(() => {
        loadTrayConfig();
    }, []);
    useEffect(() => {
        loadInstruments()
    })
    useEffect(() => {
        InstrumentApiClient.getInstrumentCountsForConfigId(id).then(
            o=>setInstC(o));
    }, [id]);


    const loadInstruments = async () => {
        const result = await axios.get(`http://localhost:8080/api/instrument_count/tray_config/${id}`);
        setInstruments(result.data);
    }
    const loadTrayConfig = async () => {
        const result = await axios.get(`http://localhost:8080/api/configuration/${id}`);
        setTrayConfig(result.data);
    };

    const deleteTrayConfig = async (id) => {
        await axios.delete(`http://localhost:8080/api/configuration/${id}`);
        navigate("/manager/manage/configs");
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="header">Tray Configuration</h2>
                    <div className="card">
                        <div className="list-group-title">
                            Details of tray configuration : {trayConfig.id}
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <b>Tray configuration name: </b>
                                    {trayConfig.trayName}
                                </li>
                                <li className="list-group-item">
                                    <b>Instrument count: </b>
                                    {instC.map((ic,index) => (
                                        <InstrumentDetails key={index} inst={ic.instrumentType} count={ic.instrumentCount}/>
                                    ))}
                                </li>
                                <button
                                    className="button" onClick={() => deleteTrayConfig(trayConfig.id)}
                                >
                                    Delete
                                </button>
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/manager/manage/configs"}>
                        Back to tray configurations
                    </Link>
                </div>
            </div>
        </div>
    );
}
