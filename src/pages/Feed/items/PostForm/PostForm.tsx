import { useState, useEffect, useCallback } from "react";
import type { UseFormRegister, FieldErrors } from "react-hook-form";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";

import { MdImage, MdAttachFile } from "react-icons/md";
import { BiSolidSend } from "react-icons/bi";

import type { PostFormInput, ResetEditorFunction } from "../../useFeed";
import { useAuth } from "../../../../hooks/useAuth";
import { FormatSelector } from "./items/FormatSelector";
import { FormButton } from "./items/FormButton";
import { handleFeatureNotImplemented } from "../../../../utils/common";
import { TbMoodSmileBeam } from "react-icons/tb";

interface PostFormProps {
  register: UseFormRegister<PostFormInput>;
  errors: FieldErrors<PostFormInput>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInteraction: () => boolean;
  onContentChange?: (content: string) => void;
  resetEditorRef?: (resetFn: ResetEditorFunction) => void;
}

export const PostForm = ({
  register,
  handleSubmit,
  handleInteraction,
  onContentChange,
  resetEditorRef,
}: PostFormProps) => {
  const { isAuthenticated } = useAuth();

  // Force component to update when editor state changes
  const [, setEditorState] = useState(0);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: "How are you feeling today?",
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
    <div className="mb-8 rounded-[20px] bg-[#00000008] p-2 shadow">
      <form
        onSubmit={_handleSubmit}
        className="rounded-[18px] border border-gray-200 bg-white shadow"
      >
        <div className="rounded-t-[18px] border-b-1 border-[#D9D9D9] p-2 focus-within:ring-1 focus-within:ring-blue-500">
          {/* TipTap Menu */}
          <FormatSelector editor={editor} setEditorState={setEditorState} />

          <div className="flex min-h-[120px] flex-row justify-between gap-2 rounded-lg px-1 py-2">
            <TbMoodSmileBeam
              size={20}
              color="#000"
              className="my-2"
              onClick={handleFeatureNotImplemented}
            />

            <div className="max-w-[95%] grow py-1">
              <EditorContent editor={editor} />
            </div>
          </div>

          <input
            type="hidden"
            {...register("content")}
            value={editor?.getHTML() || ""}
          />
        </div>

        <div className="flex items-center justify-between p-2">
          <div className="relative flex space-x-3">
            <FormButton onClick={handleFeatureNotImplemented}>
              <MdImage size={20} />
            </FormButton>

            <FormButton onClick={handleFeatureNotImplemented}>
              <MdAttachFile size={20} />
            </FormButton>
          </div>

          <button type="submit">
            <FormButton onClick={handleFeatureNotImplemented}>
              <BiSolidSend size={24} color="#5057EA" className="p-0" />
            </FormButton>
          </button>
        </div>
      </form>
    </div>
  );
};
