import { useState, useEffect, useCallback, useRef } from 'react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { PostFormInput, ResetEditorFunction } from '../../useFeed';
import EmojiPicker from 'emoji-picker-react';
import type { EmojiClickData } from 'emoji-picker-react';
import { useAuth } from '../../../../hooks/useAuth';

// TipTap imports
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';

// React Icons
import {
  MdImage,
  MdOutlineEmojiEmotions,
  MdAttachFile,
  MdSend,
} from 'react-icons/md';
import {
  TbBold,
  TbCode,
  TbH1,
  TbH2,
  TbItalic,
  TbList,
  TbListNumbers,
  TbTrash,
  TbUnderline,
} from 'react-icons/tb';
import { FormatItem } from './items/FormatItem';

interface PostFormProps {
  register: UseFormRegister<PostFormInput>;
  errors: FieldErrors<PostFormInput>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInteraction: () => boolean;
  handleFeatureClick: () => void;
  onContentChange?: (content: string) => void;
  resetEditorRef?: (resetFn: ResetEditorFunction) => void;
}

export const PostForm = ({
  register,
  errors,
  handleSubmit,
  handleInteraction,
  handleFeatureClick,
  onContentChange,
  resetEditorRef,
}: PostFormProps) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  // Get authentication state directly from context
  const { isAuthenticated } = useAuth();

  // Force component to update when editor state changes
  const [, setEditorState] = useState(0);

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

      // Force component to update to reflect new formatting state
      setEditorState((prev) => prev + 1);
    },
    onFocus: () => {
      // Always check authentication on focus
      if (!isAuthenticated) {
        handleInteraction();
      }
    },
  });

  // Function to reset the editor - wrapped in useCallback to avoid dependency changes
  const resetEditor = useCallback(() => {
    if (editor) {
      editor.commands.clearContent(true);
    }
  }, [editor]);

  // Expose the reset function via ref
  useEffect(() => {
    if (resetEditorRef) {
      resetEditorRef(resetEditor);
    }
  }, [resetEditorRef, resetEditor]);

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    if (editor) {
      editor.commands.insertContent(emojiData.emoji);
      editor.commands.focus();
    }
    setShowEmojiPicker(false);
  };

  const _handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isAuthenticated || handleInteraction()) {
      handleSubmit(e);
    }
  };

  return (
    <div className="bg-[#00000008] rounded-[20px] shadow p-2 mb-8">
      <form
        onSubmit={_handleSubmit}
        className="bg-white rounded-[18px] shadow p-4 border border-gray-200 focus-within:ring-1 focus-within:ring-blue-500"
      >
        <div className="mb-4 ">
          {/* TipTap Menu */}
          <div className="flex items-center justify-between ">
            <div className="flex items-center bg-[#00000008] rounded-[10px] p-1 w-fit">
              <div className="flex space-x-2">
                <FormatItem
                  isActive={!!editor?.isActive('heading', { level: 1 })}
                  title="Heading 1"
                  onClick={() => {
                    editor?.chain().focus().toggleHeading({ level: 1 }).run();
                    setEditorState((prev) => prev + 1);
                  }}
                >
                  <TbH1 size={20} />
                </FormatItem>
                <FormatItem
                  isActive={!!editor?.isActive('heading', { level: 2 })}
                  title="Heading 2"
                  onClick={() => {
                    editor?.chain().focus().toggleHeading({ level: 2 }).run();
                    setEditorState((prev) => prev + 1);
                  }}
                >
                  <TbH2 size={20} />
                </FormatItem>
              </div>

              <div className="mx-4 flex space-x-2">
                <FormatItem
                  isActive={!!editor?.isActive('bold')}
                  title="Bold"
                  onClick={() => {
                    editor?.chain().focus().toggleBold().run();
                    setEditorState((prev) => prev + 1);
                  }}
                >
                  <TbBold size={20} />
                </FormatItem>
                <FormatItem
                  isActive={!!editor?.isActive('italic')}
                  title="Italic"
                  onClick={() => {
                    editor?.chain().focus().toggleItalic().run();
                    setEditorState((prev) => prev + 1);
                  }}
                >
                  <TbItalic size={20} />
                </FormatItem>
                <FormatItem
                  isActive={!!editor?.isActive('underline')}
                  title="Underline"
                  onClick={() => {
                    editor?.chain().focus().toggleUnderline().run();
                    setEditorState((prev) => prev + 1);
                  }}
                >
                  <TbUnderline size={20} />
                </FormatItem>
              </div>

              <div className="flex space-x-2">
                <FormatItem
                  isActive={!!editor?.isActive('bulletList')}
                  title="Bulleted List"
                  onClick={() => {
                    editor?.chain().focus().toggleBulletList().run();
                    setEditorState((prev) => prev + 1);
                  }}
                >
                  <TbList size={20} />
                </FormatItem>

                <FormatItem
                  isActive={!!editor?.isActive('orderedList')}
                  title="Numbered List"
                  onClick={() => {
                    editor?.chain().focus().toggleOrderedList().run();
                    setEditorState((prev) => prev + 1);
                  }}
                >
                  <TbListNumbers size={20} />
                </FormatItem>
                <FormatItem
                  isActive={!!editor?.isActive('codeBlock')}
                  title="Code Block"
                  onClick={() => {
                    editor?.chain().focus().toggleCodeBlock().run();
                    setEditorState((prev) => prev + 1);
                  }}
                >
                  <TbCode size={20} />
                </FormatItem>
              </div>
            </div>

            <div className="flex items-center justify-center bg-[#FF000026] rounded-[10px] p-3 aspect-square">
              <TbTrash size={20} color="#D83B3B" />
            </div>
          </div>

          {/* TipTap Editor */}
          <div className="rounded-lg p-4 mb-3 min-h-[120px]">
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
              <MdImage size={20} />
            </button>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 p-2 rounded hover:bg-gray-100"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            >
              <MdOutlineEmojiEmotions size={20} />
            </button>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 p-2 rounded hover:bg-gray-100"
              onClick={handleFeatureClick}
            >
              <MdAttachFile size={20} />
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
            <MdSend className="w-5 h-5 mr-1" />
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};
