import type { Post } from '../useFeed';
import { BiCommentMinus } from 'react-icons/bi';
import { TbLocation } from 'react-icons/tb';
import { RiHeart3Line } from 'react-icons/ri';

interface PostItemProps {
  post: Post;
  handleFeatureClick: () => void;
}

export const PostItem = ({ post, handleFeatureClick }: PostItemProps) => {
  return (
    <div className="bg-[#00000008] rounded-lg shadow p-2 pb-3 mb-4 flex flex-col gap-y-2">
      <div className="p-3 bg-white rounded-lg flex flex-col gap-y-3">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3">
            <img
              src={`https://i.pravatar.cc/150?u=${post.author.toLowerCase()}`}
              alt={post.author}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <h3 className="font-medium">{post.author}</h3>
            <p className="text-xs text-gray-500">{post.timestamp}</p>
          </div>
        </div>

        <div className="post-content">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>

      <div className="flex justify-start space-x-6 text-sm text-gray-500">
        <button
          className="flex items-center space-x-1 hover:text-blue-600"
          onClick={handleFeatureClick}
        >
          <RiHeart3Line size={16} />

          <span>{post.likes}</span>
        </button>

        <button className="hover:text-blue-600" onClick={handleFeatureClick}>
          <BiCommentMinus size={16} />
        </button>

        <button className="hover:text-blue-600" onClick={handleFeatureClick}>
          <TbLocation size={16} />
        </button>
      </div>
    </div>
  );
};
