import {
  navMore
} from '../configs/actionTypes';
import {
    handleActions,
    createAction
} from 'redux-actions';
const initialState = {isSearch:false};

export default handleActions({
  [navMore.SAVE]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
  [navMore.TOGGLEFOUCE]:(state, action) => {
    console.log(state)
    return ({
      ...state,
      isSearch:!state.isSearch
    })
  }
}, initialState)