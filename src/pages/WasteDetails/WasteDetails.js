// WasteDetails.js
import React ,{useRef} from 'react';
import { Route, Routes, NavLink ,useNavigate} from 'react-router-dom';
import Plastic from './/Plastic';
import Paper from './Paper';
import Clothes from './Clothes';
import EWaste from './EWaste';
import Wood from './Wood';
import Placepickup from './Placepickup';
import './WasteDetails.css';
import {AppProvider} from '../../AppContext';
import { ConfirmProvider } from '../../ConfirmContext';

const WasteDetails = () => {
  const navigate = useNavigate();
  const pickupRef = useRef();
  const handlepickup = () => {
    // Save logic (you can send data to backend or store in local storage)
  
    // Navigate to the next page
    navigate('/WasteDetails/pickup');
    if (pickupRef.current) {
      pickupRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <AppProvider>
      <ConfirmProvider>
    <div className="waste-details-container">
      <div className="header d-flex justify-content-between align-items-center">
        <h1>Waste Details</h1>
        <button className="btn custom-light-green btn-lg" id='pp'  ref={pickupRef} onClick={handlepickup}>Place Pickup</button>
      </div>
    <div className="waste-details-container">
      <div className="category-row">
        <div className="category-card plastic-card ">
          <div className='card-content'>
          <h1 className='mb-5'><strong>Plastic</strong></h1>
          <NavLink to="/wastedetails/plastic">View</NavLink>
          </div>
        </div>
        <div className="category-card paper-card">
        <h1 className='mb-5'><strong>Paper</strong></h1>
          <NavLink to="/wastedetails/paper">View </NavLink>
        </div>
      </div>
      <div className="category-row ">
        <div className="category-card clothes-card">
        <h1 className='mb-5'><strong>Clothes</strong></h1>
          <NavLink to="/wastedetails/clothes">View </NavLink>
        </div>
        <div className="category-card ewaste-card">
        <h1 className='mb-5'><strong>E-waste</strong></h1>
          <NavLink to="/wastedetails/e-waste">View </NavLink>
        </div>
       </div>
       <div className='category-row'>
        <div className="category-card wood-card">
        <h1 className='mb-5'><strong>Wood</strong></h1>
          <NavLink to="/wastedetails/wood">View </NavLink>
        </div>
      </div>
      <Routes>
      
        <Route path="plastic" element={<Plastic />} />
        <Route path="paper" element={<Paper />} />
        <Route path="clothes" element={<Clothes />} />
        <Route path="e-waste" element={<EWaste />} />
        <Route path="wood" element={<Wood />} />
        <Route path="pickup" element={<Placepickup ref={pickupRef}/>} />
      </Routes>
    </div>
    </div>
    </ConfirmProvider>
    </AppProvider>
  );
};

export default WasteDetails;



