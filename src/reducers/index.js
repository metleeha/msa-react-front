import { combineReducers } from 'redux';

import auth from './auth';
import user from './user';
// import post from './post';

const rootReducer = combineReducers({
        auth,
        user,
        // post,
      });

export default rootReducer;