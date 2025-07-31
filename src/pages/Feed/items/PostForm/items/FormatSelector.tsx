import type { Editor } from '@tiptap/react';
import { FormatItem } from './FormatItem';
import {
  TbH1,
  TbH2,
  TbBold,
  TbItalic,
  TbUnderline,
  TbList,
  TbListNumbers,
  TbCode,
  TbTrash,
} from 'react-icons/tb';
import type { Dispatch, SetStateAction } from 'react';

interface FormatSelectorProps {
  editor: Editor;
  setEditorState: Dispatch<SetStateAction<number>>;
}

export const FormatSelector = ({
  editor,
  setEditorState,
}: FormatSelectorProps) => {
  return (
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

      <button
        type="button"
        className={`p-2 rounded bg-[#FF000026] aspect-square cursor-pointer`}
        onClick={() => {
          editor?.chain().focus().clearContent().run();
          setEditorState((prev) => prev + 1);
        }}
      >
        <TbTrash size={20} color="#D83B3B" />
      </button>
    </div>
  );
};
