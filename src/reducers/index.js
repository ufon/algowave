import { combineReducers } from 'redux';

import auth from './auth';
import coins from './coins';

export default combineReducers({ auth, coins });
