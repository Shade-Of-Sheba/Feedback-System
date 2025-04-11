'use client';

import React, { useState } from 'react';

const RatingForm = () => {
  const [stayRating, setStayRating] = useState(4);
  const [cleanliness, setCleanliness] = useState(75);
  const [recommend, setRecommend] = useState<boolean | null>(null);
  const [comments, setComments] = useState('');

  const handleStarClick = (rating: number) => {
    setStayRating(rating);
  };

  const handleCleanlinessChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCleanliness(parseInt(event.target.value));
  };

  const handleRecommendChange = (value: boolean) => {
    setRecommend(value);
  };

  const handleCommentsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComments(event.target.value);
  };

  const handleSubmit = () => {
    // In a real application, you would send this data to your backend
    console.log({
      stayRating,
      cleanliness,
      recommend,
      comments,
    });
    alert('Thank you for your feedback!');
    // Optionally reset the form
    setStayRating(0);
    setCleanliness(50);
    setRecommend(null);
    setComments('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">Rate Your Experience</h2>

      {/* How was your stay? */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          How was your stay?
        </label>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleStarClick(star)}
              className={`text-yellow-500 text-2xl focus:outline-none ${
                star <= stayRating ? 'fill-current' : 'fill-none'
              }`}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.51 8.26L21 9.68L15.62 14.56L17.93 21L12 17.88L6.07 21L8.38 14.56L3 9.68L9.49 8.26L12 2Z"/>
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* How clean was your room? */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          How clean was your room?
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={cleanliness}
          onChange={handleCleanlinessChange}
          className="w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-lg appearance-none cursor-pointer"
        />
        <div className="text-gray-500 text-xs mt-1">0 (Not clean) - 100 (Very clean)</div>
      </div>

      {/* Would you recommend our hotel? */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Would you recommend our hotel?
        </label>
        <div className="flex space-x-2">
          <button
            type="button"
            className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none ${
              recommend === true ? 'opacity-100' : 'opacity-50'
            }`}
            onClick={() => handleRecommendChange(true)}
          >
            Yes
          </button>
          <button
            type="button"
            className={`bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none ${
              recommend === false ? 'opacity-100' : 'opacity-50'
            }`}
            onClick={() => handleRecommendChange(false)}
          >
            No
          </button>
        </div>
      </div>

      {/* Additional comments */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Additional comments
        </label>
        <textarea
          value={comments}
          onChange={handleCommentsChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your comments here..."
          rows={3}
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </div>
  );
};

export default RatingForm;