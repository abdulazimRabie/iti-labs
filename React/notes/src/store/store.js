import { combineReducers, createStore } from "redux";
import counterReducer from "./reducors/counterReducer";
import userReducer from "./reducors/userReducer";

const reducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

const store = createStore(reducers);

export default store;
