import React, { useState } from "react";

const Wheather = () => {
  const [wheatherData, setWheatherData] = useState(null);
  const [cityName, setCityName] = useState("");
  const [temprature, setTemprature] = useState(null);
  const [titleImage, setTitleImage] = useState(null);
  const [noCityFound, setNoCityFound] = useState(null);
  const [loader, setLoader] = useState(false);

  const apiKey = "dd00f982e8d9c3f07a0f35f636352aa6";

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  const apiData = () => {
    setWheatherData(null);
    setLoader(true);
    if (cityName !== "") {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          // Handle the weather data here
          if (data.cod === "404") {
            setWheatherData(null);
          } else {
            setWheatherData(data);
            setLoader(false);
            setNoCityFound(null);
          }

          const iconCode = data ? data?.weather[0]?.icon : null;

          const temp = Math.round(data.main.temp - 273.15);
          const mainImage = `http://openweathermap.org/img/w/${iconCode}.png`;
          setTemprature(temp);
          setTitleImage(mainImage);
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

  console.log(cityName !== null || cityName !== "", "boolean");

  const handleChange = (event) => {
    setCityName(event.target.value);
  };

  return (
    <div className="main_container">
      <div className="input_container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search here"
          onChange={handleChange}
        />
        <button onClick={() => apiData()}>Search</button>
      </div>
      {loader && <p>Loading Data...</p>}
      {noCityFound !== null ? <h3>{noCityFound}</h3> : null}
      <div>
        {wheatherData !== null ? (
          <div className="main">
            <div className="container">
              <h2>{wheatherData.name}</h2>
              <div className="image">
                <img src={titleImage} alt="wheather img" width="100px" />
                <h1>{wheatherData.weather[0].main} </h1>
              </div>
              <h3>{wheatherData.weather[0].description}</h3>
              <div className="temp_and_humidity">
                <div className="temprature-section">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/728/728093.png"
                    alt=""
                    width="60px"
                  />
                  <h3>{wheatherData.main.humidity}</h3>
                  <p>Humidity:</p>
                </div>
                <div className="humidity-section">
                  <img
                    src="https://cdn.pixabay.com/photo/2022/06/01/05/54/weather-7234860_1280.png"
                    alt=""
                    width="40px"
                  />
                  <h3>
                    {temprature}
                    <span>&#8451;</span>
                  </h3>
                  <p>Temprature:</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Wheather;
