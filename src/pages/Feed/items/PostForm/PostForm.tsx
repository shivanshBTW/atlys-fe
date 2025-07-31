import { useState, useEffect, useCallback } from 'react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';

import { MdImage, MdAttachFile } from 'react-icons/md';
import { BiSolidSend } from 'react-icons/bi';

import type { PostFormInput, ResetEditorFunction } from '../../useFeed';
import { useAuth } from '../../../../hooks/useAuth';
import { FormatSelector } from './items/FormatSelector';
import { EmojiSelector } from './items/EmojiSelector';
import { FormButton } from './items/FormButton';

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
  handleSubmit,
  handleInteraction,
  handleFeatureClick,
  onContentChange,
  resetEditorRef,
}: PostFormProps) => {
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const { isAuthenticated } = useAuth();

  // Force component to update when editor state changes
  const [, setEditorState] = useState(0);

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
      setEditorState((prev) => prev + 1);
    },
    onFocus: () => {
      if (!isAuthenticated) {
        handleInteraction();
      }
    },
  });

  const resetEditor = useCallback(() => {
    if (editor) {
      editor.commands.clearContent(true);
    }
  }, [editor]);

  useEffect(() => {
    if (resetEditorRef) {
      resetEditorRef(resetEditor);
    }
  }, [resetEditorRef, resetEditor]);

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
        className="bg-white rounded-[18px] shadow border border-gray-200 "
      >
        <div className="p-2 rounded-t-[18px]  border-b-1 border-[#D9D9D9] focus-within:ring-1 focus-within:ring-blue-500">
          {/* TipTap Menu */}
          <FormatSelector editor={editor} setEditorState={setEditorState} />

          <div className="rounded-lg py-2 px-1 min-h-[120px] flex flex-row justify-between gap-2">
            <EmojiSelector
              selectedEmoji={selectedEmoji}
              setSelectedEmoji={setSelectedEmoji}
            />

            <div className="grow py-1">
              <EditorContent editor={editor} />
            </div>
          </div>

          <input
            type="hidden"
            {...register('content')}
            value={editor?.getHTML() || ''}
          />
        </div>

        <div className="flex justify-between items-center p-2">
          <div className="flex space-x-3 relative">
            <FormButton onClick={handleFeatureClick}>
              <MdImage size={20} />
            </FormButton>

            <FormButton onClick={handleFeatureClick}>
              <MdAttachFile size={20} />
            </FormButton>
          </div>

          <button type="submit">
            <FormButton onClick={handleFeatureClick}>
              <BiSolidSend size={24} color="#5057EA" className="p-0" />
            </FormButton>
          </button>
        </div>
      </form>
    </div>
  );
};
