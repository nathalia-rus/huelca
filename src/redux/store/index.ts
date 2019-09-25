import { composeWithDevTools } from "redux-devtools-extension";
import { hueldata, huelTsdata } from "../reducers/hueldataReducer";
import formData from "../reducers/formDataReducer";
import thunk from "redux-thunk";
import { epics } from "../modules/epics/index";
import { createStore, applyMiddleware, combineReducers } from "redux";
const { createEpicMiddleware } = require("redux-observable");

export default function configureStore() {
  const epicMiddleware = createEpicMiddleware();
  const middlewares = [thunk, epicMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const rootReducer = combineReducers({
    hueldata,
    formData,
    huelTsdata
  });

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  epicMiddleware.run(epics);

  return store;
}

// link to explain why this new setup for epics -
// https://redux-observable.js.org/MIGRATION.html#setting-up-the-middleware
