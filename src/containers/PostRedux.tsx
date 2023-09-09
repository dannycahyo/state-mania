import { Post } from "@components/Post";
import { useDispatch, useSelector } from "react-redux";
import { postSlice, PostRootState } from "@stores/redux";

export function PostRedux() {
  const post = useSelector((state: PostRootState) => state.socialMedia.post);
  const dispatch = useDispatch();

  const likePost = () => {
    dispatch(postSlice.actions.likePost());
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
