import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './OrderForm.css';
import Base_url from "../Url/url";
import AddDynamicInput from './AddDynamicInput';


export default function OrderForm() {

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
        axios.post(`${Base_url}/order`,order_table).then(
            (response)=>{
                console.log(response);
                console.log("success");
            },(error)=>{
                console.log(error);
                console.log("error");
            }
        )
    }
    return (

        <div className='container'>

            <h1 className='Title' color= "s">Order your trays right now</h1>
                <form onSubmit={handleForm}>
                    <input
                        type='Id'
                        className='FormInput'
                        name='customerId'
                        placeholder='Customer ID'
                        required
                        onChange={(e) => {
                            setOrder({...order_table, customerId: e.target.value})
                        }}
                    />
                    <AddDynamicInput
                        onChange={(e) => {
                            setOrder({...order_table, tray: e.target.value})
                        }}
                    />

                    <button type='submit' className='SubmitButton'>
                        Submit
                    </button>
                </form>
        </div>
    );
}

