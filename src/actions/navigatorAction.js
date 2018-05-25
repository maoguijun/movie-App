import { createAction } from 'redux-actions';
import { navigator } from '../configs/actionTypes';

// export const addAction = createAction(countType.ADD_COUNT);
// export const minAction = createAction(countType.MIN_COUNT);

export const changeNavigator = json => createAction(navigator.SAVE, () => json)()