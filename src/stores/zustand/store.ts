import { create } from "zustand";
import type { Cart, Post } from "@types";

type CartStoreState = {
  carts: Cart[];
  addProductToCart: (cart: Cart) => void;
  removeProductFromCart: (id: string) => void;
};

export const useCartStore = create<CartStoreState>((set) => ({
  carts: [],
  addProductToCart: (cart) =>
    set((state) => ({ carts: [...state.carts, cart] })),
  removeProductFromCart: (id) =>
    set((state) => ({ carts: state.carts.filter((cart) => cart.id !== id) })),
}));

type PostStoreState = {
  post: Post;
  likePost: () => void;
};

export const usePostStore = create<PostStoreState>((set) => ({
  post: {
    id: "djjd388282j2i29i2973",
    content: "Hello World",
    likes: 0,
  },
  likePost: () =>
    set((state) => ({ post: { ...state.post, likes: state.post.likes + 1 } })),
}));
