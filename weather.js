const apiKey = 'ea55eaceec6e144957190cfd552082fa';

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    displayWeather(data);
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    if (data.cod === 200) {
        const { name, main, weather } = data;
        const weatherHTML = `
            <h1>${name}</h2>
            <p>${weather[0].description}</p>
            <p>Temperature: ${main.temp}°C</p>
        `;
        weatherDiv.innerHTML = weatherHTML;
    } else {
        weatherDiv.innerHTML = '<p>City not found. Please try again.</p>';
    }
}