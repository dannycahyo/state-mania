import "@styles/post.css";

interface PostProps {
  post: Post;
  onLike: () => void;
}

export interface Post {
  id: string;
  content: string;
  likes: number;
}

export function Post({ post, onLike }: PostProps) {
  return (
    <div className="post">
      <div className="post-content">{post.content}</div>
      <div className="post-actions">
        <button onClick={onLike} className="like-button">
          Like ({post.likes})
        </button>
      </div>
    </div>
  );
}
