import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import WelcomePage from './Components/Pages/WelcomePage';
import HospitalStaff from './Components/Pages/HospitalStaff';
import SterilizationStaff from './Components/Pages/SterilizationStaff';
import Manager from './Components/Pages/Manager';
import NavBar from "./Components/NavBar";
import Tracking from "./Components/Pages/Tracking";
import ViewOrder from "./Components/ViewOrder";
import EditOrder from "./Components/Pages/EditOrder";
import ManageChoice from "./Components/Pages/ManageChoice";
import ManageTrays from "./Components/Pages/ManageTrays";
import ManageSteps from "./Components/Pages/ManageSteps";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <NavBar />
            <Routes>
                <Route path='/' exact element={<WelcomePage />} />
                <Route path='/hospital-staff' exact element={<HospitalStaff />} />
                <Route path='/sterilization-staff' exact element={<SterilizationStaff />} />
                <Route path='/manager' exact element={<Manager />} />
                <Route path='/tracking' exact element={<Tracking />} />
                <Route path='/tracking/view-order/:id' exact element={<ViewOrder/>} />
                <Route path='/manager/edit-order/:id' element={<EditOrder/>} />
                <Route path='/manager/manage' element={<ManageChoice/>} />'
                <Route path='/manager/manage/trays' element={<ManageTrays/>} />'
                <Route path='/manager/manage/steps' element={<ManageSteps/>} />'
            </Routes>
        </Router>
    );
}

export default App;
