import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../AppContext'; 

const Wood = () => {
  const history = useNavigate();
  const { setWoodData } = useAppContext();


  const [category, setCategory] = useState({
    tables: false,
    beds: false,
    chairs: false,
    doors: false
  });
  const [weight, setWeight] = useState(0);

  const handleCheckboxChange = (categoryName) => {
    setCategory((prevCategory) => ({
      ...prevCategory,
      [categoryName]: !prevCategory[categoryName],
    }));
  };

  const handleWeightChange = (value) => {
    setWeight((prevWeight) => Math.max(0, prevWeight + value));
  };

  const handleSaveAndNext = () => {
    // Save logic (you can send data to backend or store in local storage)
    const selectedItems = Object.keys(category).filter(item => category[item]);
    setWoodData({ category: 'Ewaste', items: selectedItems.join(', '), weight });
    // Navigate to the next page
    history('/WasteDetails/e-waste');
  };
  const checkboxStyle={
    border:'1px solid black'
  };

  return (
    <div className="container mt-5">
      <div className="mb-3">
      <h2 className="mb-4">Wood Details</h2>
        <label className="form-label " style={{fontWeight:'bold'}}>Choose the Category:</label>
        <div className="form-check mb-2">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.tables}
            onChange={() => handleCheckboxChange('tables')}
          />
          <label className="form-check-label">Tables</label>
        </div>
        <div className="form-check mb-2">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.beds}
            onChange={() => handleCheckboxChange('beds')}
          />
          <label className="form-check-label">Beds</label>
        </div>
        <div className="form-check mb-2">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.chairs}
            onChange={() => handleCheckboxChange('chairs')}
          />
          <label className="form-check-label">Chairs</label>
        </div>
        <div className="form-check mb-3">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.doors}
            onChange={() => handleCheckboxChange('doors')}
          />
          <label className="form-check-label">Doors</label>
        </div>
        

      
      <div className="mb-3">
        <label className="form-label mb-3" style={{fontWeight:'bold'}}>Weight:</label>
        <div className="input-group">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => handleWeightChange(-1)}
          >
            -
          </button>
          <span className="input-group-text">{weight}</span>
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => handleWeightChange(1)}
          >
            +
          </button>
        </div>
      </div>

      <button id="pp" className="btn btn-primary" onClick={handleSaveAndNext}>
        Save and Next
      </button>
    </div></div>

  );
};

export default Wood;