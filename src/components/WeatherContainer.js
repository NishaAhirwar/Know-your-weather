import React, { useEffect, useState } from "react";
import "../assets/styles/Weather.css";
import Forecast from "./Forecast";
import useFetch from "./useFetch";
import Current from "./Current";
import Loader from "./Loader";
import LocationPrompt from "./LocationPrompt";

function WeatherContainer() {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const [coords, setCoords] = useState({ latitude: null, longitude: null });
  const [url, setUrl] = useState("");
  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
      function success(pos) {
        const crd = pos.coords;
        setCoords({ longitude: crd.longitude, latitude: crd.latitude });
        setUrl(
          `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${apiKey}&units=metric`
        );
      }
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
    }
  }, []);

  return (
    <div className="main-container position-container">
      {data ? <>
        <div className="weather-data ">
        <Current data={data} />
      </div>
      <div className="blur">
        <Forecast
          data={data}
          loading={loading}
          error={error}
          setUrl={setUrl}
          apiKey={apiKey}
        />
      </div></> : loading ? <Loader /> : <LocationPrompt />}
    </div>
  );
}

export default WeatherContainer;
