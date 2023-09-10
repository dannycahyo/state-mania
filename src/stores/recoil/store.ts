import { atom } from "recoil";
import type { Cart, Post } from "@types";

const cartState = atom<Cart[]>({
  key: "cartState",
  default: [],
});

const postState = atom<Post>({
  key: "postState",
  default: {
    id: "djjd388282j2i29i2973",
    content: "Hello World",
    likes: 0,
  },
});

export { cartState, postState };
