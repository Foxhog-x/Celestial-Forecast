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
  console.log(formattedDateTime.slice(-8, -6));
  // Return the formatted date and time
  return formattedDateTime;
}

export const dateandtime = (ampm, hour) => {
  ampm.toLowerCase();

  switch (ampm) {
    case "am":
      if (hour < 12 && hour >= 5) {
        console.log("good Morning");
        return "Good Morning";
      } else if (hour === 12 || hour < 6) {
        console.log("MidNight");
        return "MidNight";
      }
      break;
    case "pm":
      if (hour >= 6 && hour < 12) {
        console.log("good evening");
        return "Good Evening";
      } else if (hour === 12 || hour < 6) {
        console.log("GOOD AFTERNOON");
        return "Good Afternoon";
      }

      break;
    default:
      console.log(null);
  }
};
