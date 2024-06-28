import React from "react";
import "../assets/styles/Weather.css";

export default function Loader() {
  return (
    <>
      <div className="position-container loading-background ">
        <div className="location-heading-text">Loading...</div>
      </div>
    </>
  );
}
