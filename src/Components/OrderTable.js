import React, {useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import axios from "axios";
import data from './data';
import Base_url from "../Url/url";
import './OrderTable.css'

const OrderTable = () => {

    const [state, setState] = useState(false);

    const toggle = () =>{
        setState(!state);
    }

    const[order, setOrder] = useState([]);

    const getOrder = async () => {
        try {
            const response = await axios.get(`${Base_url}/order`)
            setOrder(response.data);
        } catch (error){
            console.log(error);
        }
    };

    const columns = [
        {
            name: "Order id",
            selector: (row) => row.id,
        },
        {
            name: "Customer id",
            selector: (row) => row.customerId,
        },
        {
            name: "Has it been accepted",
            cell: (row) =>
                <button
                    onClick={toggle}
                    className={state ? "toggle--accepted":"toggle--accept"}>
                    {state ? 'Accepted' : 'Accept?'}
                </button>
        },
        {
            name: "Date of order",
            selector: (row) => row.creationDate,
        },
        {
            name: "Trays ordered",
            selector: (row) => row.tray,

        },
        {
            name: "Staff assigned",
        }
    ];

    useEffect(() => {
        getOrder();
    }, [])

    return <DataTable
        title="All order history"
        columns={columns}
        data={data}
        pagination
        fixedHeader
    />
}

export default OrderTable;