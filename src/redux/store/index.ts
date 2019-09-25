import { composeWithDevTools } from "redux-devtools-extension";
import hueldata from "../reducers/hueldataReducer";
import formData from "../reducers/formDataReducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
const { createEpicMiddleware } = require("redux-observable");

export default function configureStore() {
  const middlewares = [thunk, createEpicMiddleware()];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const rootReducer = combineReducers({
    hueldata,
    formData
  });

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
