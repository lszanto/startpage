import { GET_WEATHER, LOAD_WEATHER, GET_WEATHER_FAILED } from '../constants/api.types';

export function getWeather() {
    return {
        type: GET_WEATHER
    };
}

export function getWeatherFailed() {
    return {
        type: GET_WEATHER_FAILED
    };
}

export function loadWeather(payload) {
    return {
        type: LOAD_WEATHER,
        payload
    };
}