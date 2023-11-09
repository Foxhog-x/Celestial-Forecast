import React, { useState } from "react";

const Wheather = () => {
  const [wheatherData, setWheatherData] = useState(null);
  const [cityName, setCityName] = useState("");
  const [temprature, setTemprature] = useState(null);
  const [noCityFound, setNoCityFound] = useState(null);
  const [loader, setLoader] = useState(false);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const apiKey = process.env.REACT_APP_API_KEY;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  const apiData = (event) => {
    event?.preventDefault();
    setNoCityFound(null);
    setWheatherData(null);
    setLoader(true);
    if (cityName !== "") {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // Handle the weather data here
          if (data.cod === "404") {
            console.log("404 error");
            setWheatherData(null);
          } else {
            setWheatherData(data);
            setLoader(false);
            setNoCityFound(null);
          }

          const offsetSeconds = data.timezone;

          const now = new Date();

          const targetTime = new Date(now.getTime() + offsetSeconds * 1000);

          const year = targetTime.getUTCFullYear();
          const month = targetTime.getUTCMonth() + 1;
          const day = targetTime.getUTCDate();
          const hours = targetTime.getUTCHours();
          const minutes = targetTime.getUTCMinutes();

          const formatedTime = `${hours}:${minutes}`;
          const formateddate = `${day}.${month}.${year}`;

          setTime(formatedTime);
          setDate(formateddate);

          const temp = Math.round(data.main.temp - 273.15);

          setTemprature(temp);
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoader(false);
          setNoCityFound("City Not Found");
        });
    } else {
      window.alert("Please enter the city");
      setLoader(false);
    }
  };

  const handleChange = (event) => {
    setCityName(event.target.value);
  };

  return (
    <div className="main-container">
      <div className="search-div">
        <form method="POST">
          <input
            className="search-bar"
            type="text"
            placeholder="Search City here"
            onChange={handleChange}
          />
          <button onClick={(event) => apiData(event)}>Search</button>
        </form>
      </div>
      {loader && <p>Loading Data...</p>}
      {noCityFound !== null ? <h3>{noCityFound}</h3> : null}
      {wheatherData !== null ? (
        <div className="container">
          <div className="left-container">
            <div className="last-flex">
              <p>
                {wheatherData.name} {wheatherData.sys.country}
              </p>
              <div className="date">
                <p className="date">
                  {date} {time}
                </p>
              </div>
            </div>
            <div className="left-flex-2">
              <p className="main-temp">
                {temprature}
                <span>&#176;</span>
              </p>
              <div className="margin-top">
                <p>{wheatherData.wind.speed} mph</p>
                <p> 60 humidity</p>
              </div>
            </div>
            <div className="left-flex-3">
              <h1>{wheatherData.weather[0].description}</h1>
            </div>
          </div>

          <div className="right-container">
            <h1>Good Morning</h1>
            <h2>12.27pm</h2>
            <div className="right-internal">
              <p className="p-temp">
                {temprature}
                <span>&#176;</span>
              </p>
              <div className="vertical"></div>
              <div className="right">
                <p> {wheatherData.wind.speed} mph</p>
                <p> {wheatherData.main.humidity} humidity</p>
              </div>
            </div>

            <span>Feels like</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Wheather;
