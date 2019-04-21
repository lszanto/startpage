import { combineReducers } from 'redux';
import lovedpage from './lovedpage.reducer';
import api from './api.reducer';

const rootReducer = combineReducers({
    lovedpage,
    api
});

export default rootReducer;