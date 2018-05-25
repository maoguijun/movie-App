import {
  createAction
} from 'redux-actions';
import {
  movieType
} from '../configs/actionTypes';
import {
  easyfetch
} from '../../utils/fetchHelper';
import {
  host
} from '../../config'


// movielist action
export const movieListAction = json => createAction(movieType.FETCH_MOVIE,() => json)()

// fetch movielist
export const fetchMovie = (json,action) => {
  easyfetch(host,'/app/movielist','get',json).then(e => {
    action(e)
  })
}

export const goToMovieDetail = id => createAction(movieType.MOVIEID, () => id)()

// export const fetchMovie = createAction(movieType.FETCH_MOVIE,() => [{key:'a'},{key:'b'}])
