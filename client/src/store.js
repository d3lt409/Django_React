import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducers from "./redux/reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const store = configureStore({
  reducer: rootReducers,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});


export default store;
