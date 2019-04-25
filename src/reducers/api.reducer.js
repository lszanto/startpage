import { GET_WEATHER, GET_WEATHER_FAILED, LOAD_WEATHER } from '../constants/api.types';
import Config from '../config/Config';

const initialState = {
    weatherLoading: false,
    weatherTemperature: 0,
    weatherDescription: '',
    weatherIcon: 'spinner',
};

export default function api(state = initialState, action) {
    if (action.type === GET_WEATHER) {
        return Object.assign({}, state, {
            weatherLoading: true,  
        });
    } else if (action.type === GET_WEATHER_FAILED) {
        return Object.assign({}, state, {
            weatherLoading: false,  
        });
    } else if (action.type === LOAD_WEATHER) {
        return Object.assign({}, state, {
            weatherLoading: false,
            weatherTemperature: Math.floor(action.payload.temperature),
            weatherIcon: Config.WeatherIcons[action.payload.main.toLowerCase()]
        });
    }

    return state;
}