import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import filtersReducer from "./filters-reducer";
import sortingReducer from "./sorting-reducer";
import ticketsReducer from "./tickets-reducer";

let reducers = combineReducers({
	filters: filtersReducer,
	sorting: sortingReducer,
	tickets: ticketsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;
