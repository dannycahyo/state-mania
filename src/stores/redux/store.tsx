import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./cartSlice";
import { postSlice } from "./postSlice";

export const store = configureStore({
  reducer: {
    productCarts: counterSlice.reducer,
    socialMedia: postSlice.reducer,
  },
});

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);
