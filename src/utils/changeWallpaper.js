/**
 *
 * @param {string} wheather_description_img
 * @return {string}
 * @param {string} greeting
 * @return {string}
 *
 */

export const changeWallpaper = (wheather_description_img, greeting) => {
  if (greeting === "MidNight") {
    return "nightsky";
  } else {
    switch (wheather_description_img) {
      case "Haze":
        return "haze";
      case "Clear":
        return "clearsky_sunny";
      case "Clouds":
        return "clouds";
      case "Rain":
        return "raindrops";
      case "Smoke":
        return "smoke";
      default:
        return "nepal-2184940_1920";
    }
  }
};
