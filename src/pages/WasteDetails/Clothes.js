import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../AppContext'; 


const Clothes = () => {
  const history = useNavigate();
  const { setClothesData } = useAppContext();


  const [category, setCategory] = useState({
    cotton: false,
    silk: false,
    polyester: false,
    denim: false,
    leather: false
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
    setClothesData({ category: 'Plastic', items: selectedItems.join(', '), weight });
    // Navigate to the next page
    history('/WasteDetails/e-waste');
  };
  const checkboxStyle={
    border:'1px solid black'
  };

  return (
    <div className="container mt-5">
      <div className="mb-3">
      <h2 className="mb-4">Clothes Details</h2>
        <label className="form-label " style={{fontWeight:'bold'}}>Choose the Category:</label>
        <div className="form-check mb-2">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.cotton}
            onChange={() => handleCheckboxChange('cotton')}
          />
          <label className="form-check-label">Cotton</label>
        </div>
        <div className="form-check mb-2">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.silk}
            onChange={() => handleCheckboxChange('silk')}
          />
          <label className="form-check-label">Silk</label>
        </div>
        <div className="form-check mb-2">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.polyester}
            onChange={() => handleCheckboxChange('polyester')}
          />
          <label className="form-check-label">Polyester</label>
        </div>
        <div className="form-check mb-2">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.wool}
            onChange={() => handleCheckboxChange('wool')}
          />
          <label className="form-check-label">Wool</label>
        </div>
        <div className="form-check mb-3">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.denim}
            onChange={() => handleCheckboxChange('denim')}
          />
          <label className="form-check-label">Denim</label>
        </div>
        <div className="form-check mb-3">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.leather}
            onChange={() => handleCheckboxChange('leather')}
          />
          <label className="form-check-label">Leather</label>
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

export default Clothes;