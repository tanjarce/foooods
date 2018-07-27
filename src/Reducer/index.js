import { combineReducers } from  'redux';

import cart from './cart';
import catalog from './catalog';

const rootReducer = combineReducers({cart, catalog})

export default rootReducer;

