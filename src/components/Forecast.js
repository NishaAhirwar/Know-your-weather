import React, { useState } from "react";
import "../assets/styles/Weather.css";
import useFetch from "./useFetch";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import WeatherStat from "./WeatherStat";

export default function Forecast({data, loading, error, setUrl, apiKey}) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    setUrl(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${apiKey}&units=metric`
    );
  };

  const statData = {
    temp: "Temperature",
    pressure: "Pressure",
    humidity: "Humidity",
    visibility: "Visibility",
    wind: "Wind Speed",
  };

  const renderDescription = (weatherDes) => {
    const res = weatherDes.charAt(0).toUpperCase() + weatherDes.slice(1)
    return res;
  }

  return (
    <>
      {!!data && data?.weather[0] && (
        <>
          <img
            src={
              !!data &&
              data?.weather[0]?.icon &&
              `http://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`
            }
            alt="weather-icon"
            className="weather-icon"
          />
          <div className="weather-description">{!!data && data?.weather[0] && renderDescription(data?.weather[0].description)}</div>
        </>
      )}

      <div className="search-container">
        <input
          type="text"
          placeholder="search by city"
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search"
        />
        <IconButton
          onClick={handleSearch}
          sx={{
            "&.MuiIconButton-root": {
              color: "#fff !important",
            },
          }}
        >
          <SearchIcon fontSize="medium" />
        </IconButton>
      </div>
      {!!data && (
        <>
          <div className="city-container">
            {data?.name}, {data?.sys?.country}
          </div>
          {Object.keys(statData).map((key) => (
            <WeatherStat
              statKey={key}
              heading={statData[key]}
              weatherInfo={
                key === "visibility"
                  ? data[key]
                  : key === "wind"
                  ? `${data.wind.speed}`
                  : data.main[key]
              }
            />
          ))}
        </>
      )}
    </>
  );
}
