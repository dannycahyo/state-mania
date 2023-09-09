import { Cart } from "@components/Cart";
import { useCartStore } from "@stores/zustand";

export function CartZustand() {
  const { carts, addProductToCart, removeProductFromCart } = useCartStore();
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
