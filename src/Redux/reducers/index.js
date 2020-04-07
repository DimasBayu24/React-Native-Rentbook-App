import {combineReducers} from 'redux';
import bookReducers from './books';
import userReducers from './users';
import detailReducers from './detail';
import genreReducers from './genre';
import searchReducers from './search';

const reducers = combineReducers({
  book: bookReducers,
  user: userReducers,
  detail: detailReducers,
  genre: genreReducers,
  search: searchReducers,
});

export default reducers;
