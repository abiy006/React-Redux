import { configureStore } from "@reduxjs/toolkit";

//BOTH OPTIONS CAN BE VALID, YOU CAN USE ANY OF YOUR CHOICE 
import counterReducer from "./counter_slice"
import authSlice from "./auth_slice"
// import authReducer from "./auth_slice"

const store = configureStore({
  // reducer: counterSlice.reducer
  reducer: {
    // counter: counterSlice.reducer,
    count: counterReducer,
    auth: authSlice.reducer
    // auth: authReducer
  },
});

export default store;
