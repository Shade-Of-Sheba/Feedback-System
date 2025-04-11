'use client';

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const RatingForm = () => {
  const [matchExpectations, setMatchExpectations] = useState<boolean | null>(null);
  const [expectationReason, setExpectationReason] = useState('');

  const [cleanliness, setCleanliness] = useState(0);
  const [comfort, setComfort] = useState(0);
  const [checkin, setCheckin] = useState(0);
  const [staff, setStaff] = useState(0);

  const [roomWorked, setRoomWorked] = useState<boolean | null>(null);
  const [roomIssue, setRoomIssue] = useState('');

  const [recommend, setRecommend] = useState<boolean | null>(null);
  const [recommendReason, setRecommendReason] = useState('');

  const [improvements, setImprovements] = useState('');

  const handleStarClick = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    setter(value);
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

  const handleSubmit = () => {
    const feedback = {
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
    };

    console.log(feedback);
    alert('Thanks for your feedback!');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl mx-auto space-y-6">
      <div className="flex justify-center">
        <Image src="/kuriftu-logo.png" alt="Kuriftu Logo" width={120} height={120} />
      </div>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Guest Experience Feedback
      </h2>

      {/* Match Expectations */}
      <div>
        <p className="text-gray-700 font-medium">Did your room match your expectations?</p>
        <div className="flex space-x-4 mt-2">
          <button
            onClick={() => setMatchExpectations(true)}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
              matchExpectations === true
                ? 'bg-[#52a35a] text-white'
                : 'bg-green-100 text-[#52a35a] hover:bg-green-200'
            }`}
          >
            <Image src="/check.png" alt="Yes" width={20} height={20} />
            <span>Yes</span>
          </button>
          <button
            onClick={() => setMatchExpectations(false)}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
              matchExpectations === false
                ? 'bg-[#e05e97] text-white'
                : 'bg-red-100 text-[#e05e97] hover:bg-red-200'
            }`}
          >
            <Image src="/cancel.png" alt="No" width={20} height={20} />
            <span>No</span>
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

      {/* Ratings */}
      <div>
        <p className="text-gray-700 font-medium">How clean was your room?</p>
        {renderStars(cleanliness, setCleanliness)}
      </div>

      <div>
        <p className="text-gray-700 font-medium">How comfortable was your stay?</p>
        {renderStars(comfort, setComfort)}
      </div>

      {/* Room Functionality */}
      <div>
        <p className="text-gray-700 font-medium">Did everything in the room work properly?</p>
        <div className="flex space-x-4 mt-2">
          <button
            onClick={() => setRoomWorked(true)}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
              roomWorked === true
                ? 'bg-[#52a35a] text-white'
                : 'bg-green-100 text-[#52a35a] hover:bg-green-200'
            }`}
          >
            <Image src="/check.png" alt="Yes" width={20} height={20} />
            <span>Yes</span>
          </button>
          <button
            onClick={() => setRoomWorked(false)}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
              roomWorked === false
                ? 'bg-[#e05e97] text-white'
                : 'bg-red-100 text-[#e05e97] hover:bg-red-200'
            }`}
          >
            <Image src="/cancel.png" alt="No" width={20} height={20} />
            <span>No</span>
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

      <div>
        <p className="text-gray-700 font-medium">How was the check-in/check-out process?</p>
        {renderStars(checkin, setCheckin)}
      </div>

      <div>
        <p className="text-gray-700 font-medium">How friendly and helpful was our staff?</p>
        {renderStars(staff, setStaff)}
      </div>

      {/* General Feedback */}
      <div>
        <p className="text-gray-700 font-medium">What can we improve?</p>
        <textarea
          value={improvements}
          onChange={(e) => setImprovements(e.target.value)}
          placeholder="Let us know how we can make your next stay better!"
          className="mt-2 w-full border p-2 rounded-md text-sm"
        />
      </div>

      {/* Submit Button */}
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