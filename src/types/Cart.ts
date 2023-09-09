type Cart = {
  id: string;
  productName: string;
  price: number;
};

type CartState = {
  carts: Cart[];
};

export type { Cart, CartState };
