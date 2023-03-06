import React from 'react';
import '../App.css'
import {Button} from "./Button";
import './WelcomeSection.css';


function WelcomeSection() {
    return (
        <div className='welcome-container'>
            <h1>STERILE SERVICES LTD</h1>
            <p>Order your medical equipment now</p>
            <div className="welcome-btns">
                <Button className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                    ABOUT US <i className="fa-regular fa-address-card" />
                </Button>
            </div>
        </div>
    )
}

export default WelcomeSection;