import { createStore, combineReducers } from "redux";

import generalReducer from "../store/general/general.reducer";

const reducers= combineReducers({
    generalReducer
});

const store= ()=> {
    return createStore(reducers);
}

export default store;