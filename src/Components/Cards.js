import React from 'react';
import CardItem from "./CardItem";
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Please choose your role</h1>
            <div className="cards__container">
                <ul className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="Images/HospitalStaff.jpg"
                            text="Hospital staff"
                            label='Hospital staff'
                            path='/hospital-staff'
                        />
                        <CardItem
                            src="Images/SterlizationStaff.jpg"
                            text="Sterilization staff"
                            label='Sterilization staff'
                            path='/sterilization-staff'
                        />
                        <CardItem
                            src="Images/ManagerPic.jpg"
                            text="Manager"
                            label='Manager'
                            path='/manager'
                        />
                    </ul>
                </ul>
            </div>
        </div>
    )
}

export default Cards;