// Logic of weather with WeatherAPI

// Retrieved the apiKey
const apiKey = "1f092d0321eb4303b2270231250304";

// Init base url
const locationInput = document.getElementById("location-input");
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;

// Init element html
const searchButton = document.getElementById("search-button");
const locationElement = document.getElementById("location");
const region = document.getElementById("region");
const tz = document.getElementById("tz");
const localtime = document.getElementById("localtime");
const country = document.getElementById("country");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");
const icon = document.getElementById("icon");

// Get the weather of the search
searchButton.addEventListener("click", () => {
  const location = locationInput.value;
  if (location) {
    fetchWeather(location)
  }
});

// Get the weather with big city
const footerButton = document.querySelectorAll(".location-button-city");

footerButton.forEach(button => {
  button.addEventListener("click", () => {
    const location = button.textContent;
    if (location) {
      fetchWeather(location)
    }
  })
});

// Fetch weather data
function fetchWeather(location) {
  const url = apiUrl + location;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      locationElement.textContent = data.location.name;
      region.textContent = data.location.region;
      country.textContent = data.location.country;
      tz.textContent = data.location.tz_id;

      icon.src = data.current.condition.icon;
      temperatureElement.textContent = data.current.temp_c + "°C";
      descriptionElement.textContent = data.current.condition.text;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
