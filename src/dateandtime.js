const dateandtime = (ampm, hour) => {
  console.log(ampm, "function");
  console.log(hour, "hour function");
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

module.exports = dateandtime;
