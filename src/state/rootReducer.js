import { combineReducers } from 'redux';

import show from './show/showReducer';
import episode from './episode/episodeReducer';

export default combineReducers({
  show,
  episode,
});
