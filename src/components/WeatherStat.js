import React from "react";
import "../assets/styles/Weather.css";

export default function WeatherStat({ weatherInfo, heading, statKey }) {

  const renderUnit = (key) => ({
      temp: "°c",
      pressure: "mb",
      humidity: "%",
      wind: "km/h",
      visibility: "mi",
    }[key]);

  return (
    <>
      <div className="search-container stat-container">
        <span>{heading} </span>
        <span>
          {weatherInfo} {renderUnit(statKey)}
        </span>
      </div>
    </>
  );
}
