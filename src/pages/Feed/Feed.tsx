import { Navbar } from '../../components/Navbar';
import { PageHeader } from '../../components/common';
import { PostForm } from './items/PostForm';
import { PostList } from './items/PostList';
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
        <PageHeader title="Atlys Feed" />

        <PostForm
          register={register}
          errors={errors}
          handleSubmit={handleSubmit(onSubmit)}
          handleInteraction={handleInteraction}
          handleFeatureClick={handleFeatureClick}
        />

        <PostList posts={posts} handleFeatureClick={handleFeatureClick} />
      </div>
    </>
  );
};
