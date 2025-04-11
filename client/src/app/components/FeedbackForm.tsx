'use client';

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const RatingForm = () => {
  const [matchExpectations, setMatchExpectations] = useState<boolean | null>(null);
  const [expectationReason, setExpectationReason] = useState('');

  const [cleanliness, setCleanliness] = useState(3);
  const [comfort, setComfort] = useState(3);
  const [checkin, setCheckin] = useState(3);
  const [staff, setStaff] = useState(3);

  const [roomWorked, setRoomWorked] = useState<boolean | null>(null);
  const [roomIssue, setRoomIssue] = useState('');

  const [recommend, setRecommend] = useState<boolean | null>(null);
  const [recommendReason, setRecommendReason] = useState('');

  const [improvements, setImprovements] = useState('');

  const handleStarClick = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    setter(value);
  };

  const handleSubmit = () => {
    console.log({
      matchExpectations,
      expectationReason,
      cleanliness,
      comfort,
      roomWorked,
      roomIssue,
      checkin,
      staff,
      recommend,
      recommendReason,
      improvements,
    });
    alert('Thanks for your feedback!');
  };

  const renderStars = (rating: number, setRating: (value: number) => void) => (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={`cursor-pointer w-6 h-6 ${
            star <= rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          onClick={() => handleStarClick(setRating, star)}
        />
      ))}
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Guest Experience Feedback</h2>

      {/* Q1 */}
      <div>
        <p className="text-gray-700 font-medium">Did your room match your expectations?</p>
        <div className="flex space-x-4 mt-2">
          <button
            onClick={() => setMatchExpectations(true)}
            className={`px-4 py-2 rounded-full ${
              matchExpectations === true
                ? 'bg-green-500 text-white'
                : 'bg-green-100 text-green-700 hover:bg-green-200'
            }`}
          >
            ✅ Yes
          </button>
          <button
            onClick={() => setMatchExpectations(false)}
            className={`px-4 py-2 rounded-full ${
              matchExpectations === false
                ? 'bg-red-500 text-white'
                : 'bg-red-100 text-red-700 hover:bg-red-200'
            }`}
          >
            ❌ No
          </button>
        </div>
        {matchExpectations === false && (
          <textarea
            value={expectationReason}
            onChange={(e) => setExpectationReason(e.target.value)}
            placeholder="What didn’t meet your expectations?"
            className="mt-2 w-full border p-2 rounded-md text-sm"
          />
        )}
      </div>

      {/* Q2 */}
      <div>
        <p className="text-gray-700 font-medium">How clean was your room?</p>
        {renderStars(cleanliness, setCleanliness)}
      </div>

      {/* Q3 */}
      <div>
        <p className="text-gray-700 font-medium">How comfortable was your stay?</p>
        {renderStars(comfort, setComfort)}
      </div>

      {/* Q4 */}
      <div>
        <p className="text-gray-700 font-medium">Did everything in the room work properly?</p>
        <div className="flex space-x-4 mt-2">
          <button
            onClick={() => setRoomWorked(true)}
            className={`px-4 py-2 rounded-full ${
              roomWorked === true
                ? 'bg-green-500 text-white'
                : 'bg-green-100 text-green-700 hover:bg-green-200'
            }`}
          >
            ✅ Yes
          </button>
          <button
            onClick={() => setRoomWorked(false)}
            className={`px-4 py-2 rounded-full ${
              roomWorked === false
                ? 'bg-red-500 text-white'
                : 'bg-red-100 text-red-700 hover:bg-red-200'
            }`}
          >
            ❌ No
          </button>
        </div>
        {roomWorked === false && (
          <textarea
            value={roomIssue}
            onChange={(e) => setRoomIssue(e.target.value)}
            placeholder="What didn’t work?"
            className="mt-2 w-full border p-2 rounded-md text-sm"
          />
        )}
      </div>

      {/* Q5 */}
      <div>
        <p className="text-gray-700 font-medium">How was the check-in/check-out process?</p>
        {renderStars(checkin, setCheckin)}
      </div>

      {/* Q6 */}
      <div>
        <p className="text-gray-700 font-medium">How friendly and helpful was our staff?</p>
        {renderStars(staff, setStaff)}
      </div>

      {/* Q7 */}
      <div>
        <p className="text-gray-700 font-medium">Would you recommend us?</p>
        <div className="flex space-x-4 mt-2">
          <button
            onClick={() => setRecommend(true)}
            className={`px-4 py-2 rounded-full ${
              recommend === true
                ? 'bg-blue-500 text-white'
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            }`}
          >
            🔄 Yes
          </button>
          <button
            onClick={() => setRecommend(false)}
            className={`px-4 py-2 rounded-full ${
              recommend === false
                ? 'bg-red-500 text-white'
                : 'bg-red-100 text-red-700 hover:bg-red-200'
            }`}
          >
            ❌ No
          </button>
        </div>
        {recommend === false && (
          <textarea
            value={recommendReason}
            onChange={(e) => setRecommendReason(e.target.value)}
            placeholder="Why wouldn’t you recommend us?"
            className="mt-2 w-full border p-2 rounded-md text-sm"
          />
        )}
      </div>

      {/* Q8 */}
      <div>
        <p className="text-gray-700 font-medium">What can we improve?</p>
        <textarea
          value={improvements}
          onChange={(e) => setImprovements(e.target.value)}
          placeholder="Let us know how we can make your next stay better!"
          className="mt-2 w-full border p-2 rounded-md text-sm"
        />
      </div>

      <div className="text-center pt-4">
        <button
          onClick={handleSubmit}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-full"
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default RatingForm;
