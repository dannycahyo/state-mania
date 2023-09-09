import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartState, Cart } from "@types";

export type RootState = {
  productCarts: CartState;
};

const initialState: CartState = {
  carts: [],
};

export const counterSlice = createSlice({
  name: "productCarts",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Cart>) => {
      state.carts.push(action.payload);
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload);
    },
  },
});

export const store = configureStore({
  reducer: {
    productCarts: counterSlice.reducer,
  },
});

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);
