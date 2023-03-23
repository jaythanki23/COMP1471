import React, { useState } from "react";
import './AddDynamicInput.css';
import axios from "axios";

function AddDynamicInput(){
    const [inputFields, setInputFields] = useState([
        {tray: '', }
    ])

    const[order_table,setOrder]= useState({});
    const handleForm=(e)=>{
        console.log(order_table);
        postDatatoServer(order_table);
        e.preventDefault();
    }

    const postDatatoServer=(order_table)=>{
        axios.post(`"http://localhost:8080/api/order`,order_table).then(
            (response)=>{
                console.log(response);
                console.log("success");
            },(error)=>{
                console.log(error);
                console.log("error");
            }
        )
    }
    const [val,setVal]=useState([]);
    const handleAdd=()=>{
        const abc=[...val,[]]
        setVal(abc)
    }
    const handleChange=(onChangeValue,i)=>{
        const inputdata=[...val]
        inputdata[i]=onChangeValue.target.value;
        setVal(inputdata)
    }
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
                               value={data} onChange={e=>handleChange(e,i)} />
                        <button className="Button" onClick={()=>handleDelete(i)}>x</button>
                    </div>
                )
            })}
        </>
    );
}
export default AddDynamicInput;