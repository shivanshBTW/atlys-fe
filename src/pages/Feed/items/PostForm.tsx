import { useState } from 'react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { PostFormInput } from '../useFeed';
import EmojiPicker from 'emoji-picker-react';
import type { EmojiClickData } from 'emoji-picker-react';

// TipTap imports
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';

interface PostFormProps {
  register: UseFormRegister<PostFormInput>;
  errors: FieldErrors<PostFormInput>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInteraction: () => boolean;
  handleFeatureClick: () => void;
  onContentChange?: (content: string) => void;
}

export const PostForm = ({
  register,
  errors,
  handleSubmit,
  handleInteraction,
  handleFeatureClick,
  onContentChange,
}: PostFormProps) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  // Track if authentication has been checked
  const [authCheckDone, setAuthCheckDone] = useState(false);

  // Initialize TipTap editor
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: 'How are you feeling today?',
      }),
    ],
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      if (onContentChange) {
        onContentChange(html);
      }
    },
    onFocus: () => {
      // Only check authentication once
      if (!authCheckDone) {
        handleInteraction();
        setAuthCheckDone(true);
      }
    },
  });

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    if (editor) {
      editor.commands.insertContent(emojiData.emoji);
      editor.commands.focus();
    }
    setShowEmojiPicker(false);
  };
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-8">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          {/* TipTap Menu */}
          <div className="flex items-center border-b border-gray-200 pb-2 mb-3">
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() =>
                  editor?.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={`p-2 rounded ${
                  editor?.isActive('heading', { level: 1 })
                    ? 'bg-gray-200'
                    : 'hover:bg-gray-100'
                }`}
                title="Heading 1"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 4v3h5.5v12h3V7H19V4z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() =>
                  editor?.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={`p-2 rounded ${
                  editor?.isActive('heading', { level: 2 })
                    ? 'bg-gray-200'
                    : 'hover:bg-gray-100'
                }`}
                title="Heading 2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 4v3h5.5v12h3V7H19V4z" />
                </svg>
              </button>
            </div>

            <div className="mx-4 flex space-x-2">
              <button
                type="button"
                onClick={() => editor?.chain().focus().toggleBold().run()}
                className={`p-2 rounded ${
                  editor?.isActive('bold') ? 'bg-gray-200' : 'hover:bg-gray-100'
                }`}
                title="Bold"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.6 11.8c.9-.7 1.4-1.7 1.4-2.8 0-2.6-2.2-4.4-5.5-4.4H6v14h6.3c3.2 0 5.7-1.7 5.7-4.4 0-1.5-.8-2.8-2.4-3.4zM9 7h3c1.3 0 2.1.5 2.1 1.6 0 1.1-.8 1.6-2.1 1.6H9V7zm3.3 10H9v-3.9h3.3c1.4 0 2.3.6 2.3 1.9 0 1.3-.9 2-2.3 2z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => editor?.chain().focus().toggleItalic().run()}
                className={`p-2 rounded ${
                  editor?.isActive('italic')
                    ? 'bg-gray-200'
                    : 'hover:bg-gray-100'
                }`}
                title="Italic"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 5v3h2.2l-3.4 8H6v3h8v-3h-2.2l3.4-8H18V5h-8z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => editor?.chain().focus().toggleUnderline().run()}
                className={`p-2 rounded ${
                  editor?.isActive('underline')
                    ? 'bg-gray-200'
                    : 'hover:bg-gray-100'
                }`}
                title="Underline"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z" />
                </svg>
              </button>
            </div>

            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => editor?.chain().focus().toggleBulletList().run()}
                className={`p-2 rounded ${
                  editor?.isActive('bulletList')
                    ? 'bg-gray-200'
                    : 'hover:bg-gray-100'
                }`}
                title="Bulleted List"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() =>
                  editor?.chain().focus().toggleOrderedList().run()
                }
                className={`p-2 rounded ${
                  editor?.isActive('orderedList')
                    ? 'bg-gray-200'
                    : 'hover:bg-gray-100'
                }`}
                title="Numbered List"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
                className={`p-2 rounded ${
                  editor?.isActive('codeBlock')
                    ? 'bg-gray-200'
                    : 'hover:bg-gray-100'
                }`}
                title="Code Block"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                </svg>
              </button>
            </div>
          </div>

          {/* TipTap Editor */}
          <div className="border border-gray-200 rounded-lg p-4 mb-3 min-h-[120px] focus-within:ring-1 focus-within:ring-blue-500">
            <EditorContent editor={editor} />
          </div>

          <input
            type="hidden"
            {...register('content')}
            value={editor?.getHTML() || ''}
          />
        </div>
        {errors.content && (
          <p className="mt-1 text-xs text-red-500 mb-2">
            {errors.content.message}
          </p>
        )}

        <div className="flex justify-between items-center mt-2">
          <div className="flex space-x-3 relative">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 p-2 rounded hover:bg-gray-100"
              onClick={handleFeatureClick}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z" />
              </svg>
            </button>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 p-2 rounded hover:bg-gray-100"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </button>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 p-2 rounded hover:bg-gray-100"
              onClick={handleFeatureClick}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z" />
              </svg>
            </button>

            {/* Emoji Picker */}
            {showEmojiPicker && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg border border-gray-200 z-10">
                <EmojiPicker
                  onEmojiClick={handleEmojiClick}
                  autoFocusSearch={false}
                  width={300}
                  height={400}
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
          >
            <svg
              className="w-5 h-5 mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};
