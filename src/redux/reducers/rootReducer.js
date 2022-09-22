import { combineReducers } from 'redux';
import { userDetailsReducer } from './userDetailsReducer';


export const reducer = combineReducers({
   userDetails: userDetailsReducer

})
