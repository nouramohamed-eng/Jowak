const weatherDetails = document.getElementById("weatherDetails");
const cityId = Number(new URLSearchParams(window.location.search).get("cityId"));

function formatValue(value) {
  return value.replace("Â°", "°");
}

async function showWeatherDetails() {
  try {
    const response = await fetch("./js/HomeData.json");
    if (!response.ok) throw new Error("Failed to load weather data");

    const { cities, weatherData } = await response.json();
    const city = cities.find((item) => item.id === cityId);
    const weather = weatherData.find((item) => item.cityId === cityId);

    if (!city || !weather) throw new Error("Weather data not found");

    weatherDetails.innerHTML = `
      <h1 class="weather-title">${city.name}</h1>
      <p class="weather-country">${city.country}</p>
      <p class="weather-temperature">${formatValue(weather.temperature)}</p>
      <p class="weather-condition">${weather.condition}</p>
      <div class="weather-stats">
        <article class="weather-stat"><span>Humidity</span><strong>${weather.humidity}</strong></article>
        <article class="weather-stat"><span>Wind</span><strong>${weather.wind}</strong></article>
      </div>
    `;
  } catch (error) {
    weatherDetails.innerHTML = "<p>Weather data is unavailable for this location.</p>";
    console.error(error);
  }
}

showWeatherDetails();
