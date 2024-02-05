const convertToCelsius = function(tempF) {
  let tempC = (tempF - 32) * (5/9);
  tempC = Math.round(tempC * 10)/10 //round to 1 decimal place
  return tempC
};

const convertToFahrenheit = function(tempC) {
  let tempF = (tempC * 1.8) + 32
  tempF = Math.round(tempF * 10)/10 //round to 1 decimal place
  return tempF
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
