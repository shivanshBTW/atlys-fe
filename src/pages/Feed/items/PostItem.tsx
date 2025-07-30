import type { Post } from '../useFeed';

interface PostItemProps {
  post: Post;
  handleFeatureClick: () => void;
}

export const PostItem = ({ post, handleFeatureClick }: PostItemProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 animate-slideUp">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
        <div>
          <h3 className="font-medium">{post.author}</h3>
          <p className="text-xs text-gray-500">{post.timestamp}</p>
        </div>
      </div>

      <p className="mb-4">{post.content}</p>

      <div className="flex justify-between text-sm text-gray-500">
        <button
          className="flex items-center space-x-1 hover:text-blue-600"
          onClick={handleFeatureClick}
        >
          <span>👍</span>
          <span>{post.likes}</span>
        </button>

        <button className="hover:text-blue-600" onClick={handleFeatureClick}>
          💬 Comment
        </button>

        <button className="hover:text-blue-600" onClick={handleFeatureClick}>
          🔄 Share
        </button>
      </div>
    </div>
  );
};
