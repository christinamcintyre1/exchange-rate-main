import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { userReducer } from "./user";
import { ratesReducer } from "./rates";

const rootReducer = combineReducers({
  user: userReducer,
  rates: ratesReducer,
});


export const store = configureStore({
  reducer: rootReducer
});
