import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../AppContext'; 


const Paper = () => {
  const history = useNavigate();
  const { setPaperData } = useAppContext();

  const [category, setCategory] = useState({
    books: false,
    newspapers: false,
    cardboard: false,
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
    setPaperData({ category: 'Plastic', items: selectedItems.join(', '), weight });
    // Navigate to the next page
    history('/WasteDetails/Clothes');
  };
  const checkboxStyle={
    border:'1px solid black'
  };

  return (
    <div className="container mt-5">
      <div className="mb-3">
      <h2 className="mb-4">Paper Details</h2>
        <label className="form-label " style={{fontWeight:'bold'}}>Choose the Category:</label>
        <div className="form-check mb-2">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.books}
            onChange={() => handleCheckboxChange('books')}
          />
          <label className="form-check-label">Books</label>
        </div>
        <div className="form-check mb-2">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.Newspapers}
            onChange={() => handleCheckboxChange('Newspapers')}
          />
          <label className="form-check-label">Newspapers</label>
        </div>
        <div className="form-check mb-2">
          <input style={checkboxStyle}
            className="form-check-input"
            type="checkbox"
            checked={category.cardboard}
            onChange={() => handleCheckboxChange('cardboard')}
          />
          <label className="form-check-label">Cardboard</label>
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

      <button className="btn btn-primary" id="pp" onClick={handleSaveAndNext}>
        Save and Next
      </button>
    </div></div>

  );
};

export default Paper;