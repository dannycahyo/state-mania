import { useAtom } from "jotai";
import { Post } from "@components/Post";

import { postAtom } from "@stores/jotai";

export function PostJotai() {
  const [post, setPost] = useAtom(postAtom);

  const likePost = () => {
    setPost((prev) => ({ ...prev, likes: prev.likes + 1 }));
  };

  return (
    <div>
      <h2>Social Media Post</h2>
      <div>
        <Post post={post} onLike={likePost} />
      </div>
    </div>
  );
}
