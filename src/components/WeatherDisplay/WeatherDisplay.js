import React, { useEffect, useState } from 'react';
import './WeatherDisplay.css';
import Config from '../../config/Config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function WeatherDisplay(props) {
    const [ weather, setWeather ] = useState({
        loading: true,
        icon: 'spinner',
    });

    useEffect(() => {
        async function fetchWeather() {
            const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Castle%20Hill,AU&appid=5bd850fe6cc4c2da8605b42c46db9eab&units=metric');
            const json = await resp.json();

            await setWeather({
                temperature: json.main.temp,
                icon: Config.WeatherIcons[json.weather[0].main.toLowerCase()],
                loading: false
            });
        }

        fetchWeather();
    }, []);

    return (
        <div className="WeatherDisplay" >
            { weather.loading
                ? <div className="weather-loading" >weather loading <FontAwesomeIcon icon="spinner" spin /></div>
                : <div className="weather" >{weather.temperature} <FontAwesomeIcon icon="temperature-high" /> <FontAwesomeIcon icon={weather.icon} /></div>
            }
        </div>
    );
}

export default WeatherDisplay;
