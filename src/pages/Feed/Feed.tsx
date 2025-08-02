import { Navbar } from "../../components/Navbar";
import { PostForm } from "./items/PostForm";
import { PostList } from "./items/PostList";
import type { ResetEditorFunction } from "./useFeed";
import { useFeed } from "./useFeed";

export const Feed = () => {
  const {
    posts,
    register,
    handleSubmit,
    errors,
    onSubmit,
    handleInteraction,
    setResetEditorFn,
    setValue,
  } = useFeed();

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-2xl p-4">
        <PostForm
          register={register}
          errors={errors}
          handleSubmit={handleSubmit(onSubmit)}
          handleInteraction={handleInteraction}
          onContentChange={(content) => {
            setValue("content", content);
          }}
          resetEditorRef={(resetFn: ResetEditorFunction) => {
            setResetEditorFn(resetFn);
          }}
        />

        <PostList posts={posts} />
      </div>
    </>
  );
};
