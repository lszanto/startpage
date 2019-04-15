import { ofType } from 'redux-observable';
import 'rxjs/add/operator/mergeMap';
import { mergeMap } from 'rxjs/operator/mergeMap';
import { LOAD_PAGES } from '../constants/action-types';

export const addEpic = action$ => action$.pipe(
    ofType(LOAD_PAGES),
    mergeMap(action => {
        console.log('woring', action);
    })
);