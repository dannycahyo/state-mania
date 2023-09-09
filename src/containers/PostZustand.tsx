import { Post } from "@components/Post";
import { usePostStore } from "@stores/zustand";

export function PostZustand() {
  const { post, likePost } = usePostStore();

  return (
    <div>
      <h2>Social Media Post</h2>
      <div>
        <Post post={post} onLike={likePost} />
      </div>
    </div>
  );
}
