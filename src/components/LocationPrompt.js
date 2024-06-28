import React from "react";
import "../assets/styles/Weather.css";
import location from "../assets/img/location.gif";

export default function LocationPrompt() {
  return (
    <>
      <div className="loading-background ">
        <div className="location-heading-text ">Enable your location.</div>
        <img src={location} alt="location" className="location-image" />
        <div className="location-content">
          We need to know your location in order to provide you weather details.
        </div>
      </div>
    </>
  );
}
