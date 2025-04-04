const apiKey = "1f092d0321eb4303b2270231250304";
const locationInput = document.getElementById("location-input");
const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;
const searchButton = document.getElementById("search-button");
const locationElement = document.getElementById("location");
const region = document.getElementById("region");
const tz = document.getElementById("tz");
const localtime = document.getElementById("localtime");
const country = document.getElementById("country");
const temperatureElement = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const descriptionElement = document.getElementById("description");
const icon = document.getElementById("icon");
searchButton.addEventListener("click", () => {
  const location = locationInput.value;
  if (location) {
    fetchWeather();
  }
});

function fetchWeather() {
  const url = apiUrl + locationInput.value;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      locationElement.textContent = data.location.name;
      region.textContent = data.location.region;
      country.textContent = data.location.country;
      tz.textContent = data.location.tz_id;

      icon.src = data.current.condition.icon;
      temperatureElement.textContent = data.current.temp_c + "°C";
      humidity.textContent = data.current.humidity + "%";
      wind.textContent = data.current.wind_kph + " km/h";
      descriptionElement.textContent = data.current.condition.text;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
