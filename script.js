document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('locationInput').value;
    getWeatherData(location);
});

function getWeatherData(location) {
    const apiKey = 'c5e87deaffba37dfc2b6d9351fd6df81'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeatherData(data);
            } else {
                alert('Location not found. Please try again.');
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeatherData(data) {
    const weatherDataDiv = document.getElementById('weatherData');
    weatherDataDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}
