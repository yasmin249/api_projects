const apiKey = "abe746a098d94beebd9164838250706";

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const weatherInfo = document.getElementById("weatherInfo");

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=yes`);

    if (!response.ok) {
      alert("Could not fetch weather data.");
      return;
    }

    const data = await response.json();
    const current = data.current;
    const location = data.location;

    const html = `
      <h2>${location.name}, ${location.country}</h2>
      <p><strong>Temperature:</strong> ${current.temp_c} °C</p>
      <p><strong>Condition:</strong> ${current.condition.text}</p>
      <p><strong>Feels Like:</strong> ${current.feelslike_c} °C</p>
      <p><strong>Humidity:</strong> ${current.humidity}%</p>
      <p><strong>Wind:</strong> ${current.wind_kph} kph, ${current.wind_dir}</p>
      <p><strong>Air Quality (PM2.5):</strong> ${current.air_quality.pm2_5?.toFixed(2) ?? 'N/A'}</p>
    `;

    weatherInfo.innerHTML = html;
    weatherInfo.classList.remove("hidden");
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Please try again.");
  }
}
