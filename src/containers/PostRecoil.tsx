import { useRecoilState } from "recoil";
import { postState } from "@stores/recoil";
import { Post } from "@components/Post";

export function PostRecoil() {
  const [post, setPost] = useRecoilState(postState);

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
