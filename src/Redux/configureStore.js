
// configure store
import { combineReducers, legacy_createStore as createStore ,applyMiddleware } from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./Sagas/rootSaga";
import SongReducers from "./Reduces/songs";
import useReducers  from "./Reduces/users";

const reducers = combineReducers({
  songs:SongReducers,
  users:useReducers
});
const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore (
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))  
);

sagaMiddleware.run(watcherSaga);
export default store;