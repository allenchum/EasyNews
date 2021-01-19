import { combineReducers } from "redux";
import newsReducer from "./news";
import languageReducer from './language';

const rootReducer = combineReducers({ 
    news: newsReducer, 
    language: languageReducer
 });

export default rootReducer;