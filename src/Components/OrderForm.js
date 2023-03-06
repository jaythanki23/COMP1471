import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './OrderForm.css';
import SearchBar from "./SearchBar";
import data from './data';


export default function OrderForm() {

    const [inputFields, setInputFields] = useState([
        {tray: '', }
    ])

    const[form,setForm]= useState({});
    const handleForm=(e)=>{
        console.log(form);
        postDatatoServer(form);
        e.preventDefault();
    }

    const postDatatoServer=(form)=>{
        axios.post(`/hospital-staff`, form).then(
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
                        name='id'
                        placeholder='Hospital/clinic name'
                        required
                        onChange={(e) => {
                            setForm({...form, id: e.target.value})

                        }}

                    />
                    <input
                        type='text'
                        className='FormInput'
                        name='name'
                        placeholder='Your name'
                        required
                        onChange={(e) => {
                            setForm({...form, name: e.target.value})

                        }}
                    />
                    <input
                        type='text'
                        className='FormInput'
                        name='description'
                        placeholder='Tray type'
                        required
                        onChange={(e) => {
                            setForm({...form, description: e.target.value})

                        }}
                    />

                    <button type='submit' className='SubmitButton'>
                        Submit
                    </button>
                </form>
        </div>
    );
}

