import { createStore, combineReducers } from "redux";

import { listReducer } from "./reducers";

const rootReducer = combineReducers({ listState: listReducer });

export type MainState = ReturnType<typeof rootReducer>;

export default function configureStore() {

  const store = createStore(
    rootReducer
  );

  return store;
}
