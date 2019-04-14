import { ADD_PAGE, LOAD_PAGES, ADDING_PAGE, NOT_ADDING_PAGE, DELETE_PAGE, GET_PAGES_FROM_LOCALSTORAGE } from '../constants/action-types';

export function addPage(payload) {
    return {
        type: ADD_PAGE,
        payload
    };
}

export function deletePage(payload) {
    return {
        type: DELETE_PAGE,
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

export function notAddingPage() {
    return {
        type: NOT_ADDING_PAGE
    };
}

export function getPagesFromLocalstorage() {
    return {
        type: GET_PAGES_FROM_LOCALSTORAGE
    };
}