import { CartItem } from "@components/CartItem";

import type { Cart as CartType } from "@types";

interface CartProps {
  carts: CartType[];
  addToCart: (item: CartType) => void;
  removeFromCart: (itemId: string) => void;
}

function generateCartItem(): CartType {
  const id = Math.random().toString(36).substring(7);
  const productName = `Product ${id}`;
  const price = Math.floor(Math.random() * 100) + 1;
  return { id, productName, price };
}

export function Cart({ carts, addToCart, removeFromCart }: CartProps) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {carts.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            onRemove={() => removeFromCart(cartItem.id)}
          />
        ))}
      </ul>
      <button onClick={() => addToCart(generateCartItem())}>
        Add Random Item
      </button>
    </div>
  );
}
