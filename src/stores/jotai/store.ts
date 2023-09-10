import { atom } from "jotai";
import type { Cart, Post } from "@types";

const cartAtom = atom<Cart[]>([]);

const postAtom = atom<Post>({
  id: "djjd388282j2i29i2973",
  content: "Hello World",
  likes: 0,
});

export { cartAtom, postAtom };
