import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { PostFormInput } from '../useFeed';

interface PostFormProps {
  register: UseFormRegister<PostFormInput>;
  errors: FieldErrors<PostFormInput>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInteraction: () => boolean;
  handleFeatureClick: () => void;
}

export const PostForm = ({
  register,
  errors,
  handleSubmit,
  handleInteraction,
  handleFeatureClick,
}: PostFormProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-8">
      <form onSubmit={handleSubmit}>
        <textarea
          className={`w-full border ${
            errors.content ? 'border-red-500' : 'border-gray-300'
          } rounded-md p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          placeholder="What's on your mind?"
          rows={3}
          onClick={() => handleInteraction()}
          {...register('content')}
        ></textarea>
        {errors.content && (
          <p className="mt-1 text-xs text-red-500 mb-2">
            {errors.content.message}
          </p>
        )}

        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 p-2 rounded-full"
              onClick={handleFeatureClick}
            >
              📷
            </button>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 p-2 rounded-full"
              onClick={handleFeatureClick}
            >
              😀
            </button>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 p-2 rounded-full"
              onClick={handleFeatureClick}
            >
              📎
            </button>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            onClick={(e) => {
              if (!handleInteraction()) e.preventDefault();
            }}
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};
