import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartState, Cart } from "@types";

export type CartRootState = {
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
