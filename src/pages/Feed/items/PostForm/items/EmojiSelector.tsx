import type { EmojiClickData } from 'emoji-picker-react';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';
import { TbMoodSmileBeam } from 'react-icons/tb';

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
        className="text-gray-500 hover:text-gray-700 rounded hover:bg-gray-100 p-1"
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
      >
        {selectedEmoji ? (
          <span className="text-gray-500 text-[20px]">{selectedEmoji}</span>
        ) : (
          <TbMoodSmileBeam size={20} color="#000" />
        )}
      </button>

      {/* Emoji Picker */}
      <div
        className={`absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg border border-gray-200 z-10 ${
          !showEmojiPicker ? 'hidden' : ''
        }`}
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
