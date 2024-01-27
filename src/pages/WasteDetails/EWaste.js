import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../AppContext'; 


const EWaste = () => {
  const history = useNavigate();
  const { setEwasteData } = useAppContext();


  const [category, setCategory] = useState({
    wires: false,
    computers: false,
    phones: false,
    computercomponents: false,
    fans: false,
    tv: false,
    washingmachine: false,
    refrigerator: false,
    ac: false,
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
    setEwasteData({ category: 'Ewaste', items: selectedItems.join(', '), weight });
    // Navigate to the next page
    history('/WasteDetails/Wood');
  };
  const checkboxStyle={
    border:'1px solid black'
  };

  return (
    <div className="container mt-5">
      <div className="mb-3">
      <h2 className="mb-4">E-Waste Details</h2>
        <label className="form-label " style={{fontWeight:'bold'}}>Choose the Category:</label>
        <div className="form-check mb-2">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.wires}
            onChange={() => handleCheckboxChange('wires')}
          />
          <label className="form-check-label">Wires</label>
        </div>
        <div className="form-check mb-2">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.computers}
            onChange={() => handleCheckboxChange('computers')}
          />
          <label className="form-check-label">Computers</label>
        </div>
        <div className="form-check mb-2">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.phones}
            onChange={() => handleCheckboxChange('phones')}
          />
          <label className="form-check-label">Phones</label>
        </div>
        <div className="form-check mb-2">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.computercomponents}
            onChange={() => handleCheckboxChange('computercomponents')}
          />
          <label className="form-check-label">Computer components</label>
        </div>
        <div className="form-check mb-2">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.fans}
            onChange={() => handleCheckboxChange('fans')}
          />
          <label className="form-check-label">Fans</label>
        </div>
        <div className="form-check mb-2">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.tv}
            onChange={() => handleCheckboxChange('tv')}
          />
          <label className="form-check-label">Television</label>
        </div>
        <div className="form-check mb-2">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.washingmachine}
            onChange={() => handleCheckboxChange('washingmachine')}
          />
          <label className="form-check-label">Washing machine</label>
        </div>
        <div className="form-check mb-2">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.refrigerator}
            onChange={() => handleCheckboxChange('refrigerator')}
          />
          <label className="form-check-label">Refrigerator</label>
        </div>
        <div className="form-check mb-3">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.ac}
            onChange={() => handleCheckboxChange('ac')}
          />
          <label className="form-check-label">Ac/Cooler</label>
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

export default EWaste;