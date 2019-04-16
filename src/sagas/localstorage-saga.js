import { findIndex } from 'lodash';
import { takeEvery, call, put } from 'redux-saga/effects';
import { ADD_PAGE, HIDE_LOVED_PAGE_FORM, PAGE_ADD_FAILED, GET_PAGES_FROM_LOCALSTORAGE, GET_PAGES_LOCALSTORAGE_FAILED, LOAD_PAGES, PAGE_DELETED, PAGE_DELETE_FAILED, DELETE_PAGE, PAGE_EDIT_FAILED, EDIT_PAGE } from '../constants/action-types';

export default function* watcherSaga() {
    yield takeEvery(ADD_PAGE, addWorkerSaga);
    yield takeEvery(EDIT_PAGE, editWorkerSaga);
    yield takeEvery(GET_PAGES_FROM_LOCALSTORAGE, loadWorkerSaga);
    yield takeEvery(DELETE_PAGE, deleteWorkerSaga);
}

function* loadWorkerSaga() {
    try {
        const payload = yield call(getPagesFromLocalStorage);
        yield put({ type: LOAD_PAGES, payload });
    } catch(e) {
        yield put({ type: GET_PAGES_LOCALSTORAGE_FAILED, payload: e });
    }
}

function* addWorkerSaga(action) {
    try {
        const payload = yield call(addPageToLocalStorage, action);
        yield put({ type: HIDE_LOVED_PAGE_FORM, payload });
    } catch(e) {
        yield put({ type: PAGE_ADD_FAILED, payload: e });
    }
}

function* editWorkerSaga(action) {
    try {
        const payload = yield call(editPageInLocalStorage, action);
        yield put({ type: HIDE_LOVED_PAGE_FORM, payload });
    } catch(e) {
        yield put({ type: PAGE_EDIT_FAILED, payload: e });
    }
}

function* deleteWorkerSaga(action) {
    try {
        const payload = yield call(deletePageFromLocalStorage, action);
        yield put({ type: PAGE_DELETED, payload });
    } catch(e) {
        yield put({ type: PAGE_DELETE_FAILED, payload: e });
    }
}

function getPagesFromLocalStorage() {
    if (localStorage.getItem('pages') === null) {
        localStorage.setItem('pages', JSON.stringify({ pages: [] }));
        return [];
    }

    let pages = JSON.parse(localStorage.getItem('pages')).pages;
    return pages;
}

function addPageToLocalStorage({ payload }) {
    let newPages = JSON.parse(localStorage.getItem('pages')).pages;
    newPages.push(payload);
    localStorage.setItem('pages', JSON.stringify({ pages: newPages }));

    return true;
}

function editPageInLocalStorage({ payload }) {
    let pages = JSON.parse(localStorage.getItem('pages')).pages;
    localStorage.setItem('pages', JSON.stringify({ pages: Object.assign([], pages, { [findIndex(pages, { uuid: payload.uuid })]: payload}), }));

    return true;
}

function deletePageFromLocalStorage({ payload }) {
    let newPages = JSON.parse(localStorage.getItem('pages')).pages.filter((value) => value.title !== payload.title);
    localStorage.setItem('pages', JSON.stringify({ pages: newPages }));

    return true;
}