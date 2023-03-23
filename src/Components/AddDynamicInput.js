import React, { useState } from "react";
import './AddDynamicInput.css';

function AddDynamicInput(){
    const [val,setVal]=useState([]);
    const handleAdd=()=>{
        const abc=[...val,[]]
        setVal(abc)
    }

    const [tray_table, setTray] = useState({
        tray_name: ""
    })

    const handleChange=(onChangeValue,i)=>{
        const inputdata=[...val]
        inputdata[i]=onChangeValue.target.value;
        setVal(inputdata)
    }
    const onInputChange = (e) => {
        setTray({...tray_table, [e.target.tray_name]: e.target.value });
    };
    const handleDelete=(i)=>{
        const deletVal=[...val]
        deletVal.splice(i,1)
        setVal(deletVal)
    }
    console.log(val,"data-")
    return(
        <>
            <button className="Button" onClick={()=>handleAdd()}>Add</button>
            {val.map((data,i)=>{
                return(
                    <div>
                        <input className="Input"
                               placeholder='Tray type'
                               value={data}
                               onChange={(e) => {
                                   setTray({...tray_table, trayName: e.target.value})
                               }} />
                        <button className="Button" onClick={()=>handleDelete(i)}>x</button>
                    </div>
                )
            })}
        </>
    );
}
export default AddDynamicInput;