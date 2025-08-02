import type { EmojiClickData } from "emoji-picker-react";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { TbMoodSmileBeam } from "react-icons/tb";
import { cn } from "../../../../../utils/cn";

interface EmojiSelectorProps {
  selectedEmoji: string | null;
  setSelectedEmoji: (emoji: string) => void;
}

export const EmojiSelector = ({
  selectedEmoji,
  setSelectedEmoji,
}: EmojiSelectorProps) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setSelectedEmoji(emojiData.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="relative h-fit">
      <button
        type="button"
        className="rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
      >
        {selectedEmoji ? (
          <span className="text-[20px] text-gray-500">{selectedEmoji}</span>
        ) : (
          <TbMoodSmileBeam size={20} color="#000" />
        )}
      </button>

      {/* Emoji Picker */}
      <div
        className={cn(
          "absolute top-full left-0 z-10 mt-2 rounded-lg border border-gray-200 bg-white shadow-lg",
          {
            hidden: !showEmojiPicker,
          },
        )}
      >
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          autoFocusSearch={false}
          width={300}
          height={400}
        />
      </div>
    </div>
  );
};
