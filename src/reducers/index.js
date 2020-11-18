import {combineReducers} from 'redux';
import modalsReducers from './modalsReducer';
import validationsReducer from './validationsReducers';
import tweetsReducer from './tweetsReducer';

export default combineReducers({
    
    modals: modalsReducers,
    validations: validationsReducer,
    tweets:tweetsReducer

});