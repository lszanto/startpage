import { createStore, compose, applyMiddleware } from 'redux';
import rootReducers from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import localstorageSaga from '../sagas/localstorage-saga';
import apiSaga from '../sagas/api-saga';

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducers,
    storeEnhancers(applyMiddleware(initialiseSagaMiddleware))
);

initialiseSagaMiddleware.run(localstorageSaga);
initialiseSagaMiddleware.run(apiSaga);

export default store;