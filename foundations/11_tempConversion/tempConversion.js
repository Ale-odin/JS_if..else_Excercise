const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32)/1.8;
  let roundedCelsius= Math.round(celsius * 10)/10;
  return roundedCelsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * 1.8) + 32
  let roundedFahrenheit = Math.round(fahrenheit * 10)/10;
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
