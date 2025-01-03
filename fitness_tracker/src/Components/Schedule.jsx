import React from 'react';
import './Schedule.css';
// Import a CSS file for styling if needed

const Schedule = ({ meal, time }) => {
  return (
    <div className="meal-card mb-3 ms-2">
      <div className="meal-header">
        <h2 className="meal-title">{meal.title}</h2>
        <span className="meal-time">{time}</span>
      </div>
      <div className='d-flex me-2 '>

      <img src={meal.image} alt={meal.title} className="meal-image img-fluid rounded rounded-circle me-2" />

      <div className="nutrient-bars">
        <div className="nutrient-bar">
          <span className="nutrient-label">Carbs</span>
          <div className="bar-container me-2">
            <div
              className="bar-carbs "
              style={{ width: `${meal.nutrients.carbs}%` }}
            ></div>
          </div>
          <span className="nutrient-percentage">{meal.nutrients.carbs}%</span>
        </div>

        <div className="nutrient-bar">
          <span className="nutrient-label">Protein</span>
          <div className="bar-container me-2">
            <div
              className="bar-protein"
              style={{ width: `${meal.nutrients.protein}%` }}
            ></div>
          </div>
          <span className="nutrient-percentage">{meal.nutrients.protein}%</span>
        </div>

        <div className="nutrient-bar">
          <span className="nutrient-label">Fat</span>
          <div className="bar-container me-2 ">
            <div
              className="bar-fat"
              style={{ width: `${meal.nutrients.fat}%`,  }}
            ></div>
          </div>
          <span className="nutrient-percentage">{meal.nutrients.fat}%</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Schedule;


