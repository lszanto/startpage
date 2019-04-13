import { ADD_PAGE, LOAD_PAGES, ADDING_PAGE, NOT_ADDING_PAGE } from '../constants/action-types';

const initialState = {
    pages: [],
    isAddingPage: false,
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_PAGE) {
        return Object.assign({}, state, {
            pages: state.pages.concat(action.payload)
        });
    } else if (action.type === LOAD_PAGES) {
        return Object.assign({}, state, {
            pages: action.payload
        });
    } else if (action.type === ADDING_PAGE) {
        return Object.assign({}, state, {
            isAddingPage: true
        });
    } else if (action.type === NOT_ADDING_PAGE) {
        return Object.assign({}, state, {
            isAddingPage: false
        });
    }

    return state;
}

export default rootReducer;