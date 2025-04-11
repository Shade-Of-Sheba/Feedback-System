'use client';

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const RatingForm = () => {
  const [funEnjoyment, setFunEnjoyment] = useState(0);
  const [poolRideCleanliness, setPoolRideCleanliness] = useState(0);
  const [feltSafe, setFeltSafe] = useState<boolean | null>(null);
  const [safetyConcern, setSafetyConcern] = useState('');
  const [staffFriendliness, setStaffFriendliness] = useState(0);
  const [rideWaitTime, setRideWaitTime] = useState(0);
  const [facilitiesClean, setFacilitiesClean] = useState<boolean | null>(null);
  
  const [recommendWaterPark, setRecommendWaterPark] = useState<boolean | null>(null);
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
      funEnjoyment,
      poolRideCleanliness,
      feltSafe,
      safetyConcern,
      staffFriendliness,
      rideWaitTime,
      facilitiesClean,
   
      recommendWaterPark,
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
        Water Park Experience Feedback
      </h2>

      {/* How fun and enjoyable was your visit? */}
      <div>
        <p className="text-gray-700 font-medium">How fun and enjoyable was your visit? </p>
        {renderStars(funEnjoyment, setFunEnjoyment)}
      </div>

      {/* How clean and well-maintained were the pools and rides? */}
      <div>
        <p className="text-gray-700 font-medium">How clean and well-maintained were the pools and rides? </p>
        {renderStars(poolRideCleanliness, setPoolRideCleanliness)}
      </div>

      {/* Did you feel safe while using the attractions? */}
      <div>
        <p className="text-gray-700 font-medium">Did you feel safe while using the attractions? </p>
        <div className="flex space-x-4 mt-2">
          <button
            onClick={() => setFeltSafe(true)}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
              feltSafe === true
                ? 'bg-[#52a35a] text-white'
                : 'bg-green-100 text-[#52a35a] hover:bg-green-200'
            }`}
          >
            <Image src="/check.png" alt="Yes" width={20} height={20} />
            <span>Yes</span>
          </button>
          <button
            onClick={() => setFeltSafe(false)}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
              feltSafe === false
                ? 'bg-[#e05e97] text-white'
                : 'bg-red-100 text-[#e05e97] hover:bg-red-200'
            }`}
          >
            <Image src="/cancel.png" alt="No" width={20} height={20} />
            <span>No</span>
          </button>
        </div>
        {feltSafe === false && (
          <textarea
            value={safetyConcern}
            onChange={(e) => setSafetyConcern(e.target.value)}
            placeholder="What concern?"
            className="mt-2 w-full border p-2 rounded-md text-sm"
          />
        )}
      </div>

      {/* How friendly and helpful was the staff? */}
      <div>
        <p className="text-gray-700 font-medium">How friendly and helpful was the staff?</p>
        {renderStars(staffFriendliness, setStaffFriendliness)}
      </div>

      {/* How was the waiting time for rides? */}
      <div>
        <p className="text-gray-700 font-medium">How was the waiting time for rides? </p>
        {renderStars(rideWaitTime, setRideWaitTime)}
      </div>

      {/* Were the changing rooms and facilities clean? */}
      <div>
        <p className="text-gray-700 font-medium">Were the changing rooms and facilities clean? </p>
        <div className="flex space-x-4 mt-2">
          <button
            onClick={() => setFacilitiesClean(true)}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
              facilitiesClean === true
                ? 'bg-[#52a35a] text-white'
                : 'bg-green-100 text-[#52a35a] hover:bg-green-200'
            }`}
          >
            <Image src="/check.png" alt="Yes" width={20} height={20} />
            <span>Yes</span>
          </button>
          <button
            onClick={() => setFacilitiesClean(false)}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
              facilitiesClean === false
                ? 'bg-[#e05e97] text-white'
                : 'bg-red-100 text-[#e05e97] hover:bg-red-200'
            }`}
          >
            <Image src="/cancel.png" alt="No" width={20} height={20} />
            <span>No</span>
          </button>
        </div>
      </div>

      {/* How would you rate the food and beverage options? */}
  

      {/* Would you recommend our water park? */}
      <div>
        <p className="text-gray-700 font-medium">Would you recommend our water park? </p>
        <div className="flex space-x-4 mt-2">
          <button
            onClick={() => setRecommendWaterPark(true)}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
              recommendWaterPark === true
                ? 'bg-[#52a35a] text-white'
                : 'bg-green-100 text-[#52a35a] hover:bg-green-200'
            }`}
          >
            <Image src="/check.png" alt="Yes" width={20} height={20} />
            <span>Yes</span>
          </button>
          <button
            onClick={() => setRecommendWaterPark(false)}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
              recommendWaterPark === false
                ? 'bg-[#e05e97] text-white'
                : 'bg-red-100 text-[#e05e97] hover:bg-red-200'
            }`}
          >
            <Image src="/cancel.png" alt="No" width={20} height={20} />
            <span>No</span>
          </button>
        </div>
        {recommendWaterPark === false && (
          <textarea
            value={recommendReason}
            onChange={(e) => setRecommendReason(e.target.value)}
            placeholder="Why?"
            className="mt-2 w-full border p-2 rounded-md text-sm"
          />
        )}
      </div>

      {/* What can we improve? */}
      <div>
        <p className="text-gray-700 font-medium">What can we improve? (Open text)</p>
        <textarea
          value={improvements}
          onChange={(e) => setImprovements(e.target.value)}
          placeholder="Let us know how we can make your next visit better!"
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