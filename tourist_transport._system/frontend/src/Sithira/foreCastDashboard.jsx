import React, { useState } from 'react';
import { BiBarChart, BiDatabase, BiFile, BiHourglass } from 'react-icons/bi';
import './ForecastDashboard.css';

const ForecastDashboard = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateReport = () => {
    setIsGenerating(true);
    setTimeout(() => {
      alert('Full report generated successfully!');
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="dashboard-container">
      <div className="forecast-card">
        <div className="card-header">
          <BiBarChart className="header-icon" />
          <span>Galle Forecast (June 2025)</span>
        </div>
        <div className="card-body">
          <div className="data-source">
            <BiDatabase className="data-icon" />
            Data Source: 2023-2024 Immigration
          </div>
          
          <div className="comparison-container">
            <div className="year-box current">
              <div className="year-label">2025</div>
              <div className="value">1,200 <span className="trend up">▲ 20%</span></div>
            </div>
            <div className="year-box previous">
              <div className="year-label">2024 Actual</div>
              <div className="value">1,000</div>
            </div>
          </div>
          
          <div className="top-countries">
            <div className="section-title">Top Countries (Predicted)</div>
            <div className="country-tags">
              <span className="country-tag">Germany (35%)</span>
              <span className="country-tag">India (28%)</span>
              <span className="country-tag">UK (18%)</span>
              <span className="country-tag">China (12%)</span>
            </div>
          </div>
          
          <button 
            className={`report-btn ${isGenerating ? 'generating' : ''}`}
            onClick={handleGenerateReport}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <BiHourglass className="spin" />
                Generating Report...
              </>
            ) : (
              <>
                <BiFile />
                Generate Full Report
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForecastDashboard;