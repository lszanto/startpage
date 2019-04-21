import { findIndex } from 'lodash';
import { ADD_PAGE, LOAD_PAGES, ADDING_PAGE, DELETE_PAGE, HIDE_LOVED_PAGE_FORM, EDITING_PAGE, EDIT_PAGE } from '../constants/lovedpage.types';

const initialState = {
    pages: [],
    isFormShown: false,
    editingPage: null,
};

export default function lovedpage(state = initialState, action) {
    if (action.type === ADD_PAGE) {
        return Object.assign({}, state, {
            pages: state.pages.concat(action.payload)
        });
    }  else if (action.type === ADDING_PAGE) {
        return Object.assign({}, state, {
            isFormShown: true,
            formMode: 'add',
        });
    } else if (action.type === EDIT_PAGE) {
        return Object.assign({}, state, {
            pages: Object.assign([], state.pages, { [findIndex(state.pages, { uuid: action.payload.uuid })]: action.payload}),
        });
    } else if (action.type === EDITING_PAGE) {
        return Object.assign({}, state, {
            isFormShown: true,
            formMode: 'edit',
            editingPage: action.payload,
        });
    } else if(action.type === DELETE_PAGE) {
        return Object.assign({}, state, {
            pages: state.pages.filter((value) => value.title !== action.payload.title)
        });
    } else if (action.type === LOAD_PAGES) {
        return Object.assign({}, state, {
            pages: action.payload
        });
    } else if (action.type === HIDE_LOVED_PAGE_FORM) {
        return Object.assign({}, state, {
            isFormShown: false,
            editingPage: null,
        });
    }

    return state;
}