import { useAtom } from "jotai";
import { Cart } from "@components/Cart";
import { cartAtom } from "@stores/jotai";
import type { Cart as CartType } from "@types";

export function CartJotai() {
  const [carts, setCarts] = useAtom(cartAtom);
  const addProductToCart = (cart: CartType) => {
    setCarts((prev) => [...prev, cart]);
  };

  const removeProductFromCart = (cartId: string) => {
    setCarts((prev) => prev.filter((cart) => cart.id !== cartId));
  };

  return (
    <>
      <Cart
        carts={carts}
        addToCart={addProductToCart}
        removeFromCart={removeProductFromCart}
      />
    </>
  );
}
