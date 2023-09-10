import { useRecoilState } from "recoil";
import { Cart } from "@components/Cart";
import { cartState } from "@stores/recoil";

import type { Cart as CartType } from "@types";

export function CartRecoil() {
  const [carts, setCarts] = useRecoilState(cartState);

  const addProductToCart = (cart: CartType) => {
    setCarts((prev) => [...prev, cart]);
  };

  const removeProductFromCart = (cartId: string) => {
    setCarts((prev) => prev.filter((cart) => cart.id !== cartId));
  };

  return (
    <Cart
      carts={carts}
      addToCart={addProductToCart}
      removeFromCart={removeProductFromCart}
    />
  );
}
