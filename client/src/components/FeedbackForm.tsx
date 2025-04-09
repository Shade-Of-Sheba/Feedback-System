'use client';

import { useState } from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const emojiRatings = [
  { label: 'Angry', emoji: '😡' },
  { label: 'Disappointed', emoji: '😕' },
  { label: 'Neutral', emoji: '😐' },
  { label: 'Happy', emoji: '🙂' },
  { label: 'Awesome!', emoji: '😍' },
];

const likeOptions = [
  'Delivery speed',
  'Product quality',
  'Politeness and competence of staff',
  'Customer support',
  'Overall service',
];

export default function FeedbackFormCompact() {
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [likedItems, setLikedItems] = useState<string[]>([]);
  const [comment, setComment] = useState('');

  const handleEmojiSelect = (label: string) => {
    setSelectedEmoji(label);
  };

  const toggleLike = (item: string) => {
    setLikedItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      experience: selectedEmoji,
      liked: likedItems,
      comment,
    });
    // Add real submission logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6"
    >
      <h2 className="text-xl font-semibold text-gray-800">Share your feedback</h2>

      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">Rate your experience</p>
        <div className="flex gap-3">
          {emojiRatings.map(({ label, emoji }) => (
            <button
              type="button"
              key={label}
              onClick={() => handleEmojiSelect(label)}
              className={`text-2xl transition-all relative ${
                selectedEmoji === label ? 'scale-125' : ''
              }`}
            >
              {emoji}
              {selectedEmoji === label && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full text-xs px-1.5 py-0.5">
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
        {selectedEmoji && (
          <p className="text-blue-600 text-sm mt-1 font-semibold">
            {selectedEmoji}
          </p>
        )}
      </div>

      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">What did you like?</p>
        <ul className="space-y-2">
          {likeOptions.map(option => (
            <li
              key={option}
              onClick={() => toggleLike(option)}
              className="flex items-center justify-between cursor-pointer hover:bg-gray-50 px-3 py-2 border rounded-md"
            >
              <span className="text-sm">{option}</span>
              {likedItems.includes(option) ? (
                <CheckCircle className="text-green-500 w-5 h-5" />
              ) : (
                <Circle className="text-gray-300 w-5 h-5" />
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your comment (optional)
        </label>
        <textarea
          rows={4}
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Describe your experience here"
          className="w-full p-2 border rounded-md resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#8E1616] hover:bg-[#D84040] text-white py-2 rounded-md font-semibold"
      >
        Submit Feedback
      </button>
    </form>
  );
}
