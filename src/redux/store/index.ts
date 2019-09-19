import todoReducer from "../reducers/hueldataReducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore() {
  const middlewares = [thunk];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    todoReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
