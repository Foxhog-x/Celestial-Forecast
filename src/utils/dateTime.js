/**
 *
 * @param {number} offsetSeconds
 * @returns {string}
 */

export function getDateTimeWithOffset(offsetSeconds) {
  // Create a new Date object with the current date and time
  const currentDate = new Date();

  // Calculate the offset in milliseconds
  const offsetMilliseconds = offsetSeconds * 1000;

  // Calculate the new date and time based on the offset
  const newDateWithOffset = new Date(
    currentDate.getTime() + offsetMilliseconds
  );

  // Get the options for formatting the date and time
  const options = {
    timeZone: "UTC", // Use UTC to display the offset without applying it

    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  // Format the date and time based on the options
  const formattedDateTime = newDateWithOffset.toLocaleString("en-US", options);

  // Return the formatted date and time
  return formattedDateTime;
}

export const dateandtime = (ampm, hour) => {
  ampm = ampm.toLowerCase();

  switch (ampm) {
    case "am":
      if (hour === "12") {
        return "MidNight";
      }
      if (hour > 0 && hour <= 6) {
        return "MidNight";
      }
      if (hour >= 6 && hour <= 11) {
        return "Good Morning";
      }
      break;

    case "pm":
      if (hour === 12) {
        return "Good Afternoon";
      }
      if (hour > 0 && hour <= 6) {
        return "Good Afternoon";
      }
      if (hour >= 6 && hour <= 11) {
        return "Good Evening";
      }
      break;
    default:
      console.log(null);
  }
};
