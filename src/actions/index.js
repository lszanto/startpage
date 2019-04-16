import { ADD_PAGE, LOAD_PAGES, ADDING_PAGE, HIDE_LOVED_PAGE_FORM, DELETE_PAGE, GET_PAGES_FROM_LOCALSTORAGE, EDIT_PAGE, EDITING_PAGE } from '../constants/action-types';

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

export function editingPage(payload) {
    return {
        type: EDITING_PAGE,
        payload
    }
}

export function editPage(payload) {
    return {
        type: EDIT_PAGE,
        payload
    }
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

export function hideLovedPageForm() {
    return {
        type: HIDE_LOVED_PAGE_FORM
    };
}

export function getPagesFromLocalstorage() {
    return {
        type: GET_PAGES_FROM_LOCALSTORAGE
    };
}