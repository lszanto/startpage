import { combineEpics } from 'redux-observable';
import { addEpic } from './add';

export const rootEpic = combineEpics(
    addEpic
);