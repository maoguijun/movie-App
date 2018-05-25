import {
  movieType
} from '../configs/actionTypes';
import {
    handleActions,
    createAction
} from 'redux-actions';
import { easyfetch } from '../../utils/fetchHelper';
import { host } from '../../config';
const initialState = {};

export default handleActions({
  [movieType.FETCH_MOVIE]: (state, action) => ({
    ...state,
    movielist: action.payload.rows,
    count: action.payload.count
  }),
  [movieType.MOVIEID]: (state, action) => ({
    ...state,
    movieId:action.payload
  })
}, initialState)