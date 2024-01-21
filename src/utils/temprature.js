/**
 *
 * @param {number} tempratureInKelvin
 * @returns {number}
 */

export const convertKelvinToCelsius = (tempratureInKelvin) => {
  return Math.round(tempratureInKelvin - 273.15);
};
