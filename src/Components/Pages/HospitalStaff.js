import '../../App.css';
import OrderForm from "../OrderForm";
import CreateOrder from "../CreateOrder";
import React from "react";
import '../OrderForm.css'
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: Blue;
  text-decoration: none;
  margin: 1rem;
  margin-left: 17.5rem;
  margin-top: 3rem;
  position: relative;
  font: sans-serif;
`;

function HospitalStaff() {
    return (
        <>
            <StyledLink
                className="trackingLink"
                to={'/tracking'}>
                    Track your order
            </StyledLink>
            <br/>
            <CreateOrder></CreateOrder>
            {/* <OrderForm /> */}
        </>
    );
}

export default HospitalStaff;