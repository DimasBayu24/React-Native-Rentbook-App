import {combineReducers} from 'redux';
import bookReducers from './books';
import userReducers from './users';
import detailReducers from './detail';
import genreReducers from './genre';

const reducers = combineReducers({
  book: bookReducers,
  user: userReducers,
  detail: detailReducers,
  genre: genreReducers,
});

export default reducers;
