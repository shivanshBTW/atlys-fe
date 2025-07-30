import type { Post } from '../useFeed';
import { PostItem } from './PostItem';

interface PostListProps {
  posts: Post[];
  handleFeatureClick: () => void;
}

export const PostList = ({ posts, handleFeatureClick }: PostListProps) => {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          handleFeatureClick={handleFeatureClick}
        />
      ))}
    </div>
  );
};
