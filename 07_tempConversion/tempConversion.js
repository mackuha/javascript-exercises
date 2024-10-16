const convertToCelsius = function(number) {
  const result = (number - 32) * 5 / 9
  return Math.round( result * 1e1 ) / 1e1;
};



const convertToFahrenheit = function(number) {
  const result = (number * 9 / 5) + 32
  return Math.round( result * 1e1 ) / 1e1;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
