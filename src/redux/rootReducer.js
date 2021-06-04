import { combineReducers } from 'redux';

import menuReducer from './menuButton/menuButton.reducer';

export default combineReducers({
    menu: menuReducer
});