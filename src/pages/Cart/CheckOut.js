import React from 'react';
import Sidebar from '../../components/Sidebar';
import dboy from './delivery.png'; 

const CheckOut = () => {
  return (
    <div>
          <div className="d-flex flex-column align-items-center justify-content-center h-100">
          <img src={dboy} alt="dboy" className="img-fluid" style={{ maxWidth: '220px', maxHeight: '220px' }} />
            <h2>Products will reach you soon</h2>
            <h3 className='mt-3'>Thank You!!</h3>
          </div>
    </div>
  );
};

export default CheckOut;
