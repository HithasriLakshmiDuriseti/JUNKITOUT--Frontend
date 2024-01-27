import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../AppContext'; 

const PlasticDetails = () => {
  const history = useNavigate();
  const { setPlasticData } = useAppContext();

  const [category, setCategory] = useState({
    bottles: false,
    covers: false,
    furniture: false,
    tableware: false,
    decoratives: false,
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
    setPlasticData({ category: 'Plastic', items: selectedItems.join(', '), weight });
    // Navigate to the next page
    history('/WasteDetails/Paper');
  };

  const checkboxStyle={
    border:'1px solid black'
  };

  return (
    <div className="container mt-5" >
      <div className="mb-3">
      <h2 className="mb-4">Plastic Details</h2>
        <label className="form-label " style={{fontWeight:'bold'}}>Choose the Category:</label>
        <div className="form-check mb-2">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.bottles}
            onChange={() => handleCheckboxChange('bottles')}
          />
          <label className="form-check-label">Bottles</label>
        </div>
        <div className="form-check mb-2">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.covers}
            onChange={() => handleCheckboxChange('covers')}
          />
          <label className="form-check-label">Bags/Covers</label>
        </div>
        <div className="form-check mb-2">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.furniture}
            onChange={() => handleCheckboxChange('furniture')}
          />
          <label className="form-check-label">Furniture</label>
        </div>
        <div className="form-check mb-2">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.tableware}
            onChange={() => handleCheckboxChange('tableware')}
          />
          <label className="form-check-label">Tableware</label>
        </div>
        <div className="form-check mb-3">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.decoratives}
            onChange={() => handleCheckboxChange('decoratives')}
          />
          <label className="form-check-label">Decoratives</label>
        </div>
      <div></div>
      <div className="mb-4">
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

export default PlasticDetails;