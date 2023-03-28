import '../../App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {TrayApiClient} from "../../api/TrayApiClient";
import {TrayConfigurationApiClient} from "../../api/TrayConfigurationApiClient";
import NewInstrumentCount from '../NewInstrumentCount'
import { Button } from "react-bootstrap";


export default function ManageTrayConfigs() {
    const [instruments, setInstruments] = useState([]) //available instruments
    const [trayConfigurations, setTrayConfigurations] = useState([]) // available tray configurations

    const [trayName, setTrayName] = useState() //name of new tray configuration
    const [instrumentCounts, setInstrumentCounts] = useState([])
    

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
        TrayConfigurationApiClient.createTrayConfig({
            trayName: trayName,
        }).then((trayCof)=>{
            console.log("+TrayConfig:", trayCof)
            //create inst counts
            for(var ic of instrumentCounts){
                ic.trayConfiguration = trayCof
                TrayConfigurationApiClient.createInstrumentCount(ic).then((newIC)=>{
                    console.log("+IC:",newIC)
                })
            }
            setTrayName("")
            setInstrumentCounts([])
            loadTrayConfigurations()
        })
    }

    function addInstrumentCount(){
        var icTmp = instrumentCounts.slice();
        icTmp.push({
            trayConfiguration: undefined,
            instrumentType: undefined,
            instrumentCount: 0
        });
        setInstrumentCounts(icTmp);
    }
    function removeInstrumentCount(){
        var icTmp = instrumentCounts.slice();
        icTmp.pop();
        setInstrumentCounts(icTmp);
    }
    

    return (
        <>
            <input
                type='text'
                className='FormInput'
                name='configName'
                placeholder='Name of new tray configuration'
                required
                value = {trayName}
                onChange={(e) => setTrayName(e.target.value)}
            />
            {instrumentCounts.map((ic,index) => (
                <NewInstrumentCount key={index} instrumentCount={ic} instrumentTyps={instruments}/>
            ))}
             <br/>
             <Button className="SubmitButton" onClick={()=>addInstrumentCount()}>Add Instrument</Button>
             <Button className="SubmitButton" onClick={()=>removeInstrumentCount()}>Remove Instrument</Button>
            <br/>
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
                            <tr key={index}>
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
