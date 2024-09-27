import React, { useEffect } from 'react'

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_KEY = 'YOUR_API_KEY';

    const fetchWeather = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
            const data = await response.json();
            setWeatherData(data);
        } catch(err) {
            setError('Failed to fetch data');
        };
    }

    // useEffect(() => {
    //     fetchWeather();
    // }, []);

  return (
    <div>
        <h2>WeatherApp</h2>
        <div>
            <form>
                <input type='text' value={city} onChange={(e) => setCity(e.target.value)}/>
                <input type='text' value={country} onChange={(e) => setCountry(e.target.value)} />
                <button onClick={fetchWeather}>Get Weather</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {weatherData && (
                <div>
                    <h3>{weatherData.name}</h3>
                    <p>Temp: {weatherData.main.temp}c</p>
                    <p>Weather: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default WeatherApp;