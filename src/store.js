import cartReducer from "./features/cart/cartSlice"
import userReducer from "./features/user/userSlice"
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user:userReducer,
   
  },
});

export default store;
