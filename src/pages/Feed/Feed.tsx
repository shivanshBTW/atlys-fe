import { Navbar } from '../../components/Navbar';
import { useFeed } from './useFeed';

export const Feed = () => {
  const {
    posts,
    register,
    handleSubmit,
    errors,
    onSubmit,
    handleInteraction,
    handleFeatureClick,
  } = useFeed();

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto p-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-center">Atlys Feed</h1>
        </header>

        {/* Post editor */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <form onSubmit={handleSubmit(onSubmit)}>
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

        {/* Posts feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md p-4 animate-slideUp"
            >
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

                <button
                  className="hover:text-blue-600"
                  onClick={handleFeatureClick}
                >
                  💬 Comment
                </button>

                <button
                  className="hover:text-blue-600"
                  onClick={handleFeatureClick}
                >
                  🔄 Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
