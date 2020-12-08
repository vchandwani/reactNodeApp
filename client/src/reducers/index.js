import {combineReducers} from 'redux';
import authReducder from './authReducer';

export default combineReducers({
    auth : authReducder
});