import useWeather from "../hooks/useWeather";
import { dateandtime, getDateTimeWithOffset } from "../utils/dateTime";
import { mileToKillometer } from "../utils/genralConvert";
import { convertKelvinToCelsius } from "../utils/temprature";
import { changeWallpaper } from "../utils/changeWallpaper";

const Wheather = () => {
  const { SetCityName, handleApi, notFound, wheather, cityName, lat } =
    useWeather();
  const greet = dateandtime(
    getDateTimeWithOffset(wheather?.timezone).slice(-2),
    getDateTimeWithOffset(wheather?.timezone).slice(-8, -6)
  );

  return (
    <div
      className="main-container"
      style={{
        backgroundImage: `url(/${changeWallpaper(
          wheather?.weather[0].main,
          dateandtime(
            getDateTimeWithOffset(wheather?.timezone).slice(-2),
            getDateTimeWithOffset(wheather?.timezone).slice(-8, -6)
          )
        )}.jpg)`,
        backgroundRepeat: "no-repeat",
        color: greet === "MidNight" ? "white" : "black",
      }}
    >
      <div className="search-div">
        <form>
          <input
            className="search-bar"
            type="text"
            placeholder="Search City here"
            value={cityName}
            onChange={(e) => SetCityName(e.target.value)}
          />
          <button onClick={(event) => handleApi("search", event)}>
            Search
          </button>

          {lat !== null ? (
            <button onClick={(event) => handleApi("getLocation", event)}>
              Get Location
            </button>
          ) : null}
        </form>
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
                <span>
                  {convertKelvinToCelsius(wheather?.main?.temp)}&#176;
                </span>
              </p>
              <div className="vertical"></div>
              <div className="right">
                <p>
                  {" "}
                  {mileToKillometer(wheather?.wind?.speed)}
                  <span></span> mph
                </p>
                <p>
                  {" "}
                  <span>{wheather?.main?.humidity}</span> humidity
                </p>
              </div>
            </div>

            <span>
              Feels like
              <span>
                {" "}
                {convertKelvinToCelsius(wheather?.main?.feels_like)}&#176;
              </span>
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
