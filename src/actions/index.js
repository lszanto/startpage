import { ADD_PAGE, LOAD_PAGES, ADDING_PAGE } from '../constants/action-types';

export function addPage(payload) {
    return {
        type: ADD_PAGE,
        payload
    };
}

export function loadPages(payload) {
    return {
        type: LOAD_PAGES,
        payload
    };
}

export function addingPage() {
    return {
        type: ADDING_PAGE
    };
}