import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_WEATHER, GET_WEATHER_FAILED, LOAD_WEATHER } from '../constants/api.types';

export default function* watcherSaga() {
    yield takeEvery(GET_WEATHER, getWeatherSaga);
}

function* getWeatherSaga() {
    try {
        const payload = yield call(getWeather);
        yield put({ type: LOAD_WEATHER, payload });
    } catch(e) {
        yield put({ type: GET_WEATHER_FAILED, payload: e });
    }
}

function getWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Castle%20Hill,AU&appid=5bd850fe6cc4c2da8605b42c46db9eab&units=metric').then((response) => {
        return response.json();
    }).then((json) => {
        return json;
    });
}