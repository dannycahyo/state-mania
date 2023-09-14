import { Post } from "@components/Post";
import { useStoreContext } from "@stores/context";

export function PostContext() {
  const { post, addLikes } = useStoreContext();

  return (
    <div>
      <h2>Social Media Post</h2>
      <div>
        <Post post={post} onLike={addLikes} />
      </div>
    </div>
  );
}
