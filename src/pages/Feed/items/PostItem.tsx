import { BiCommentMinus } from "react-icons/bi";
import { RiHeart3Line } from "react-icons/ri";
import { TbLocation } from "react-icons/tb";
import { handleFeatureNotImplemented } from "../../../utils/common";
import type { Post } from "../useFeed";

interface PostItemProps {
  post: Post;
}

export const PostItem = ({ post }: PostItemProps) => {
  return (
    <div className="mb-4 flex flex-col gap-y-2 rounded-lg bg-[#00000008] p-2 pb-3 shadow">
      <div className="flex flex-col gap-y-3 rounded-lg bg-white p-3">
        <div className="flex items-center">
          <div className="mr-3 h-12 w-12 rounded-full bg-gray-300">
            <img
              src={`https://i.pravatar.cc/150?u=${post.author.toLowerCase()}`}
              alt={post.author}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium">{post.author}</h3>
            <p className="text-xs text-gray-500">{post.timestamp}</p>
          </div>
        </div>

        <div className="post-content max-w-full break-words">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>

      <div className="flex justify-start space-x-6 text-sm text-gray-500">
        <button
          className="flex items-center space-x-1 hover:text-blue-600"
          onClick={handleFeatureNotImplemented}
        >
          <RiHeart3Line size={16} />
          <span>{post.likes}</span>
        </button>

        <button
          className="hover:text-blue-600"
          onClick={handleFeatureNotImplemented}
        >
          <BiCommentMinus size={16} />
        </button>

        <button
          className="hover:text-blue-600"
          onClick={handleFeatureNotImplemented}
        >
          <TbLocation size={16} />
        </button>
      </div>
    </div>
  );
};
