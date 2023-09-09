import type { Cart } from "@types";

interface CartItemProps {
  cartItem: Cart;
  onRemove: () => void;
}

export function CartItem({ cartItem, onRemove }: CartItemProps) {
  return (
    <li>
      <div>
        <strong>{cartItem.productName}</strong>
      </div>
      <div>
        <span>Price: ${cartItem.price}</span>
      </div>
      <div>
        <button onClick={onRemove}>Remove</button>
      </div>
    </li>
  );
}
