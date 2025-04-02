import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BiBinoculars, BiDatabase, BiRocket, BiHourglass } from 'react-icons/bi';
import './ForecastCard.css';

const ForecastCard = ({ onGenerate }) => {
  const [district, setDistrict] = useState('');
  const [compareYear, setCompareYear] = useState('2023');
  const [isLoading, setIsLoading] = useState(false);

  const districts = [
    { value: 'galle', label: 'Galle', accuracy: 89 },
    { value: 'kandy', label: 'Kandy', accuracy: 85 },
    { value: 'colombo', label: 'Colombo', accuracy: 82 },
    { value: 'nuwaraeliya', label: 'Nuwara Eliya', accuracy: 78 },
  ];

  const years = ['2023', '2022', '2021'];

  const handleGenerate = async () => {
    if (!district) {
      alert('Please select a district first');
      return;
    }

    setIsLoading(true);
    
    try {
      // Call the passed callback or simulate API call
      if (onGenerate) {
        await onGenerate({ district, compareYear });
      } else {
        await new Promise(resolve => setTimeout(resolve, 1500));
        const selectedDistrict = districts.find(d => d.value === district);
        alert(`Prediction generated for ${selectedDistrict.label} district compared to ${compareYear}`);
      }
    } catch (error) {
      console.error('Generation failed:', error);
      alert('Failed to generate predictions');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forecast-container" data-testid="forecast-card">
      <div className="forecast-card">
        <div className="card-header">
          <BiBinoculars className="header-icon" />
          <span>District Tourist Forecast</span>
        </div>
        <div className="card-body">
          <div className="data-source">
            <BiDatabase className="data-icon" />
            Using 2023-2024 Historical Data
          </div>
          
          <div className="form-group">
            <label htmlFor="district" className="form-label">District</label>
            <select
              id="district"
              className="form-select"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              disabled={isLoading}
              aria-label="Select district"
            >
              <option value="" disabled>Select a district</option>
              {districts.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label} <span className="accuracy-badge">Accuracy: {d.accuracy}%</span>
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="compare-year" className="form-label">Compare With</label>
            <select
              id="compare-year"
              className="form-select"
              value={compareYear}
              onChange={(e) => setCompareYear(e.target.value)}
              disabled={isLoading}
              aria-label="Select comparison year"
            >
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          
          <button
            className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
            onClick={handleGenerate}
            disabled={isLoading}
            aria-busy={isLoading}
          >
            {isLoading ? (
              <>
                <BiHourglass className="btn-icon spin" />
                Generating...
              </>
            ) : (
              <>
                <BiRocket className="btn-icon" />
                Generate Predictions
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

ForecastCard.propTypes = {
  onGenerate: PropTypes.func
};

export default ForecastCard;