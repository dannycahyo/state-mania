import { Cart } from "@components/Cart";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { counterSlice } from "@stores/redux";

import type { Cart as CartTypes } from "@types";
import type { RootState } from "@stores/redux";

const useCartsSelector: TypedUseSelectorHook<RootState> = useSelector;

export function CartRedux() {
  const carts = useCartsSelector((state) => state.productCarts.carts);
  const dispatch = useDispatch();

  const addToCart = (cartItem: CartTypes) => {
    dispatch(counterSlice.actions.addProductToCart(cartItem));
  };

  const removeFromCart = (cartItemId: string) => {
    dispatch(counterSlice.actions.removeProductFromCart(cartItemId));
  };

  return (
    <Cart carts={carts} addToCart={addToCart} removeFromCart={removeFromCart} />
  );
}
