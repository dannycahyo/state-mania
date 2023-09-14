import React, { createContext, useContext, useState } from "react";

import type { Cart, Post } from "@types";

type Store = {
  carts: Cart[];
  addProductsToCart: (cart: Cart) => void;
  removeProductsFromCart: (cartId: string) => void;
  post: Post;
  addLikes: () => void;
};

const initialState: Store = {
  carts: [],
  addProductsToCart: () => {},
  removeProductsFromCart: () => {},
  post: {
    id: "djjd388282j2i29i2973",
    content: "Hello World",
    likes: 0,
  },
  addLikes: () => {},
};

export const StoreContext = createContext<Store>(initialState);
export const useStoreContext = () => useContext(StoreContext);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [carts, setCarts] = useState<Cart[]>([]);
  const [post, setPost] = useState<Post>(initialState.post);

  const addProductsToCart = (cart: Cart) => {
    setCarts([...carts, cart]);
  };

  const removeProductsFromCart = (cartId: string) => {
    setCarts(carts.filter((cart) => cart.id !== cartId));
  };

  const addLikes = () => {
    setPost({ ...post, likes: post.likes + 1 });
  };

  const value = {
    carts,
    addProductsToCart,
    removeProductsFromCart,
    post,
    addLikes,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
