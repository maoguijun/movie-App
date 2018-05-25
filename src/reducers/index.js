import countReducer from './countReducer';
import navigatorReducer from './navigatorReducer';
import movieReducer from './movieReducer'
import { combineReducers } from 'redux';
import searchTextInputReducer from './navMoreReducer';

export default combineReducers({
    count: countReducer,
    nav: navigatorReducer,
    movie:movieReducer,
    navMore:searchTextInputReducer
})
