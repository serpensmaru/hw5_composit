import React from 'react';
import './Weather.css';

export default function Weather({ weather }) {
  return (
    <div className="weather">
      <img src={weather.icon} alt="icon" />
      <div className="weather-main">
        <span>{weather.temp}</span>
        <span>&#176;</span>
      </div>
      <div>
        <div>
          <span className="weather-second">Утром</span>
          <span>{weather.morning}</span>
          <span>,</span>
        </div>
        <div>
          <span className="weather-second">Днем</span>
          <span>{weather.day}</span>
        </div>
      </div>
    </div>
  );
}