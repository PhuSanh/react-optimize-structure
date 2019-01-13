import { combineReducers } from 'redux';
import sidebar from "./sidebar.reducer";

const appReducers = combineReducers({
	sidebar
});

export default appReducers;