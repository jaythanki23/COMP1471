import '../../App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function ManageChoice() {

    return (
        <>
            <button
                type="button"
                className="button"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://localhost:3000/manager/manage/trays';
                }}
            > Manage trays</button>
            <button
                type="button"
                className="button"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://localhost:3000/manager/manage/steps';
                }}
            > Manage sterilization steps</button>
        </>
    );
}
