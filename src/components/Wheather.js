import useWeather from "../hooks/useWeather";
import { dateandtime, getDateTimeWithOffset } from "../utils/dateTime";
import { mileToKillometer } from "../utils/genralConvert";
import { convertKelvinToCelsius } from "../utils/temprature";

const Wheather = () => {
  const { SetCityName, handleApi, notFound, wheather, cityName, lat } =
    useWeather();
  return (
    <div className="main-container">
      <div className="search-div">
        <input
          className="search-bar"
          type="text"
          placeholder="Search City here"
          value={cityName}
          onChange={(e) => SetCityName(e.target.value)}
        />
        <button onClick={() => handleApi("search")}>Search</button>

        {lat !== null ? (
          <button onClick={() => handleApi("getLocation")}>Get Location</button>
        ) : null}
      </div>
      {notFound ? (
        notFound
      ) : wheather !== null ? (
        <div className="container">
          <div className="left-container">
            <div className="last-flex">
              <p>
                {wheather?.name} {wheather?.sys?.country}
              </p>
              <div className="date">
                <p className="date">
                  {getDateTimeWithOffset(wheather?.timezone)}
                </p>
              </div>
            </div>
            <div className="left-flex-2">
              <p className="main-temp">
                <span>
                  {convertKelvinToCelsius(wheather?.main?.temp)}&#176;
                </span>
              </p>
              <div className="margin-top">
                <p>
                  {mileToKillometer(wheather?.wind?.speed)}
                  <span></span> mph
                </p>
                <p>
                  <span>{wheather?.main?.humidity}</span> humidity
                </p>
              </div>
            </div>
            <div className="left-flex-3">
              <h1>{wheather?.weather?.[0].description}</h1>
            </div>
          </div>

          <div className="right-container">
            <h1>
              {" "}
              {dateandtime(
                getDateTimeWithOffset(wheather?.timezone).slice(-2),
                getDateTimeWithOffset(wheather?.timezone).slice(-8, -6)
              )}
            </h1>
            <h2> </h2>
            <div className="right-internal">
              <p className="p-temp">
                {}
                <span>&#176;</span>
              </p>
              <div className="vertical"></div>
              <div className="right">
                <p> mph</p>
                <p> humidity</p>
              </div>
            </div>

            <span>
              Feels like
              <span>&#176;</span>
            </span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Wheather;
