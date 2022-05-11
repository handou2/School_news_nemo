import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./user/slice";

const rootReducer = combineReducers({
  user: userSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
