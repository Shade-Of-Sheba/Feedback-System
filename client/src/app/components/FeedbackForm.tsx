"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';

const emojiRatings = [
  { label: 'Angry', emoji: '😡' },
  { label: 'Disappointed', emoji: '😕' },
  { label: 'Neutral', emoji: '😐' },
  { label: 'Happy', emoji: '🙂' },
  { label: 'Awesome!', emoji: '😍' },
];

const allOptions = [
  'Delivery speed',
  'Product quality',
  'Politeness and competence of staff',
  'Customer support',
  'Overall service',
];

const angryOptions = [
  'Slow speed',
  'Poor product quality',
  'Low politeness and competence of staff',
  'Unhelpful customer support',
  'Poor overall service',
];

const disappointedOptions = [
  'Slower than expected delivery',
  'Product did not meet expectations',
  'Staff could have been more attentive',
  'Customer support was not satisfactory',
  'Service was underwhelming',
];

const neutralOptions = [
  'Delivery speed',
  'Product quality',
  'Politeness and competence of staff',
  'Customer support',
  'Overall service',
];

const happyOptions = [
  'Delivery speed',
  'Product quality',
  'Politeness and competence of staff',
  'Customer support',
  'Overall service',
];

const awesomeOptions = [
  'Delivery speed',
  'Product quality',
  'Politeness and competence of staff',
  'Customer support',
  'Overall service',
];

const optionsMap = {
  Angry: angryOptions,
  Disappointed: disappointedOptions,
  Neutral: neutralOptions,
  Happy: happyOptions,
  'Awesome!': awesomeOptions,
};

export default function FeedbackFormWithLogo() {
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [likedItems, setLikedItems] = useState<string[]>([]);
  const [comment, setComment] = useState('');

  const handleEmojiSelect = (label: string) => {
    setSelectedEmoji(label);
    setLikedItems([]); // Reset selected items when emoji changes
  };

  const toggleLike = (item: string) => {
    setLikedItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleSelectAll = () => {
    setLikedItems(optionsMap[selectedEmoji] || allOptions);
  };

  const handleDeselectAll = () => {
    setLikedItems([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      experience: selectedEmoji,
      liked: likedItems,
      comment,
    });
    // Submission logic can go here
  };

  const currentOptions = optionsMap[selectedEmoji] || allOptions;
  const questionText = selectedEmoji
    ? selectedEmoji === 'Angry'
      ? 'What made you angry?'
      : selectedEmoji === 'Disappointed'
      ? 'What disappointed you?'
      : selectedEmoji === 'Neutral'
      ? 'What aspects were neutral?'
      : selectedEmoji === 'Happy'
      ? 'What did you like?'
      : selectedEmoji === 'Awesome!'
      ? 'What did you love?'
      : 'What aspects did you find relevant?'
    : 'What aspects did you find relevant?';

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 shadow-xl rounded-lg space-y-6 relative transition-colors duration-200"
    >
      {/* Logo */}
      <div className="flex justify-center">
        <Image
          src="/kuriftu-logo.png"
          alt="Kuriftu Logo"
          width={100}
          height={100}
          className="mb-4"
        />
      </div>

      {/* Heading */}
      <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-100">
        Your feedback is valuable
      </h2>

      {/* Emoji Rating */}
      <div>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Rate your experience
        </p>
        <div className="flex gap-6">
          {emojiRatings.map(({ label, emoji }) => (
            <button
              key={label}
              type="button"
              onClick={() => handleEmojiSelect(label)}
              className={`text-2xl relative transition-transform ${
                selectedEmoji === label ? 'scale-125' : ''
              }`}
            >
              {emoji}
              {selectedEmoji === label && (
                <span className="absolute -top-2 -right-2 bg-[#52a35a] text-white text-xs px-1.5 py-0.5 rounded-full">
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
        {selectedEmoji && (
          <p className="mt-1 text-sm font-semibold text-[#52a35a] dark:text-[#52a35a]">
            {selectedEmoji}
          </p>
        )}
      </div>

      {/* Likes / Options based on Emoji */}
      <div>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {questionText}
        </p>
        <ul className="space-y-2">
          {currentOptions.map(option => (
            <li
              key={option}
              onClick={() => toggleLike(option)}
              className={`flex items-center justify-between px-3 py-2 border rounded-md cursor-pointer transition-all duration-200 transform ${
                likedItems.includes(option)
                  ? 'bg-[#e05e97] dark:bg-[#e05e97] border-[#e05e97] scale-105'
                  : 'hover:bg-[#dedb7e] dark:hover:bg-[#dedb7e] dark:border-[#c09755]'
              }`}
            >
              <span className="text-sm text-gray-800 dark:text-gray-100">{option}</span>
              {likedItems.includes(option) && (
                <span className="text-[#52a35a] dark:text-[#52a35a] text-sm font-bold">✓</span>
              )}
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={handleSelectAll}
            className="text-sm text-[#52a35a] dark:text-[#52a35a] hover:text-[#8e1616] dark:hover:text-[#8e1616] transition-colors"
          >
            Select All
          </button>
          <button
            type="button"
            onClick={handleDeselectAll}
            className="text-sm text-[#52a35a] dark:text-[#52a35a] hover:text-[#8e1616] dark:hover:text-[#8e1616] transition-colors"
          >
            Deselect All
          </button>
        </div>
      </div>

      {/* Comment */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Your comment (optional)
        </label>
        <textarea
          rows={4}
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Describe your experience here"
          className="w-full p-2 border rounded-md resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
        />
      </div>

      {/* Submit and Chat Button */}
      <div className="flex justify-between items-center">
        <button
          type="submit"
          className="w-full py-2 text-white font-semibold rounded-md bg-[#e05e97] hover:bg-[#D84040] dark:bg-[#D84040] dark:hover:bg-[#e05e97] transition-colors duration-200"
        >
          Submit Feedback
        </button>

        {/* Chat Button */}
        <button
          type="button"
          title="Chat with us"
          onClick={() => alert('Chat feature coming soon!')}
          className="p-3 text-white rounded-full shadow-lg bg-[#e05e97] hover:bg-[#D84040] dark:bg-[#D84040] dark:hover:bg-[#e05e97] flex items-center justify-center transition-colors duration-200 ml-4"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
}
