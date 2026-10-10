function WeatherCard({ weather }) {
    return (
        <div className="weather-card">
            <h2>{weather.name}</h2>

            <p>Temperature: {weather.main.temp}°C</p>

            <p>Condition: {weather.weather[0].main}</p>

            <p>Humidity: {weather.main.humidity}%</p>

            <p>Wind speed: {weather.wind.speed} m/s</p>
            
        </div>
    );
}

export default WeatherCard;