import { Cart } from "@components/Cart";
import { useStoreContext } from "@stores/context";

export function CartContext() {
  const { carts, addProductsToCart, removeProductsFromCart } =
    useStoreContext();

  return (
    <>
      <Cart
        carts={carts}
        addToCart={addProductsToCart}
        removeFromCart={removeProductsFromCart}
      />
    </>
  );
}
