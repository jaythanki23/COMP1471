import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import WelcomePage from './Components/Pages/WelcomePage';
import HospitalStaff from './Components/Pages/HospitalStaff';
import SterilizationStaff from './Components/Pages/SterilizationStaff';
import Manager from './Components/Pages/Manager';
import NavBar from "./Components/NavBar";

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
          </Routes>
      </Router>
  );
}

export default App;
