import { createStore, compose, applyMiddleware } from 'redux';
import rootReducers from '../reducers/index';
import createSagaMiddleware from 'redux-saga';
import localstorageSaga from '../sagas/localstorage-saga';

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducers,
    storeEnhancers(applyMiddleware(initialiseSagaMiddleware))
);

initialiseSagaMiddleware.run(localstorageSaga);

export default store;