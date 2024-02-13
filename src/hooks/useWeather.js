import { useEffect, useState } from "react";

const useWeather = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [lat, setLat] = useState(null);
  const [log, setLog] = useState(null);
  const [cityName, SetCityName] = useState("");
  const [notFound, setNotFound] = useState("");
  const [wheather, SetWheatherData] = useState(null);

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  const geoApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${apiKey}`;

  /**
   *
   * @param {'search' | 'getLocation'} btnType
   * @param {'event'} e
   */

  function handleApi(btnType, event) {
    event.preventDefault();
    if (btnType === "getLocation") {
      if (lat !== null) {
        setNotFound("");
      }
      fetch(geoApiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.cod === "400") {
            setNotFound("Please Enable location permission");
            SetWheatherData(null);
          } else {
            SetWheatherData(data);
          }
        });
    } else {
      if (cityName !== "") {
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            if (data.cod === "404") {
              setNotFound(data.message);
            } else {
              SetWheatherData(data);
              setNotFound("");
              console.log(data, "byname");
            }
          });
      }
    }
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (postion) => {
          const { latitude, longitude } = postion.coords;
          setLat(latitude);
          setLog(longitude);
        },
        (error) => {
          alert(error.message);
        }
      );
    }
  }, [lat]);

  console.log(wheather);
  return {
    SetCityName,
    notFound,
    wheather,
    handleApi,
    cityName,
    lat,
  };
};

export default useWeather;
