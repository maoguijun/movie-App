import { createAction } from 'redux-actions';
import {  navMore } from '../configs/actionTypes';

export const saveSearchTextInput = json => createAction(navMore.SAVE,() => json)();
export const changeFouce = createAction(navMore.TOGGLEFOUCE);

