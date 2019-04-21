import { takeLatest, put } from 'redux-saga/effects';
import { GET_WEATHER, GET_WEATHER_FAILED, LOAD_WEATHER } from '../constants/api.types';

export default function* watcherSaga() {
    yield takeLatest(GET_WEATHER, getWeatherSaga);
}

function* getWeatherSaga() {
    try {
        const json = yield fetch('https://api.openweathermap.org/data/2.5/weather?q=Castle%20Hill,AU&appid=5bd850fe6cc4c2da8605b42c46db9eab&units=metric').then(response => response.json(), );
        const payload = {
            temperature: json.main.temp,
            main: json.weather[0].main,
        };
        yield put({ type: LOAD_WEATHER, payload, });
    } catch(e) {
        yield put({ type: GET_WEATHER_FAILED, payload: e });
    }
}