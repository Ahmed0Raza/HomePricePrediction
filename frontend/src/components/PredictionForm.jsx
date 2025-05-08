import React, { useState } from 'react';
import { predictHousePrice } from '../services/prediction/predictionServices'; // Your service
import './PredictionForm.css';

const postalCodeSuggestions = [
  "6000", "6600", "7420", "7500", "8800", "7000", "6540",
  "6420", "5500", "7200", "6840"
];

const PredictionForm = () => {
  const [houseDetails, setHouseDetails] = useState({
    area: '',
    bedrooms: '',
    bathrooms: '',
    stories: '',
    basement: '',
    airconditioning: '',
  });

  const [predictionResult, setPredictionResult] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHouseDetails({
      ...houseDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const result = await predictHousePrice(houseDetails);
      setPredictionResult(result.predictedPrice);
      setShowModal(true);
    } catch (err) {
      setError('Failed to predict the house price. Please check your input and try again.');
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setPredictionResult(null);
  };

  return (
    <div className="prediction-form-container">
      <h2>House Price Estimator</h2>
      <p>
        Fill out the following details to estimate the price of a house. The more accurate the data, the better the prediction.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="area">Postal Code of the Property Location:</label>
          <select
            name="area"
            value={houseDetails.area}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Postal Code</option>
            {postalCodeSuggestions.map((code) => (
              <option key={code} value={code}>{code}</option>
            ))}
          </select>
          <small>Select the postal code that corresponds to where the house is located.</small>
        </div>

        <div>
          <label htmlFor="bedrooms">Number of Bedrooms:</label>
          <input
            type="number"
            name="bedrooms"
            value={houseDetails.bedrooms}
            onChange={handleInputChange}
            placeholder="e.g., 3"
            required
          />
        </div>

        <div>
          <label htmlFor="bathrooms">Number of Bathrooms:</label>
          <input
            type="number"
            name="bathrooms"
            value={houseDetails.bathrooms}
            onChange={handleInputChange}
            placeholder="e.g., 2"
            required
          />
        </div>

        <div>
          <label htmlFor="stories">Number of Stories:</label>
          <input
            type="number"
            name="stories"
            value={houseDetails.stories}
            onChange={handleInputChange}
            placeholder="e.g., 1 or 2"
            required
          />
        </div>

        <div>
          <label htmlFor="basement">Basement:</label>
          <select
            name="basement"
            value={houseDetails.basement}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Option</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
          <small>Select "Yes" if the house includes a basement, otherwise "No".</small>
        </div>

        <div>
          <label htmlFor="airconditioning">Air Conditioning:</label>
          <select
            name="airconditioning"
            value={houseDetails.airconditioning}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Option</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
          <small>Select "Yes" if the house has air conditioning.</small>
        </div>

        <button type="submit">Predict House Price</button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Estimated Price</h3>
            <p>The estimated price of the house is: <strong>${predictionResult}</strong></p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PredictionForm;
