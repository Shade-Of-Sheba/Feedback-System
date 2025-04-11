'use client';

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const RatingForm2 = () => {
  const [mealTasteQuality, setMealTasteQuality] = useState(0);
  const [foodTemperature, setFoodTemperature] = useState<boolean | null>(null);
  const [temperatureIssue, setTemperatureIssue] = useState('');
  const [foodVariety, setFoodVariety] = useState(0);
  const [diningCleanAmbiance, setDiningCleanAmbiance] = useState(0);
  const [serviceSpeed, setServiceSpeed] = useState(0);
  const [staffAttentiveness, setStaffAttentiveness] = useState(0);
  const [valueForPrice, setValueForPrice] = useState(0);
  const [recommendFoodService, setRecommendFoodService] = useState<boolean | null>(null);
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
      mealTasteQuality,
      foodTemperature,
      temperatureIssue,
      foodVariety,
      diningCleanAmbiance,
      serviceSpeed,
      staffAttentiveness,
      valueForPrice,
      recommendFoodService,
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
        Food Service Feedback
      </h2>

      {/* How was the taste and quality of your meal? */}
      <div>
        <p className="text-gray-700 font-medium">How was the taste and quality of your meal? </p>
        {renderStars(mealTasteQuality, setMealTasteQuality)}
      </div>

      {/* Was your food served at the right temperature? */}
      <div>
        <p className="text-gray-700 font-medium">Was your food served at the right temperature? </p>
        <div className="flex space-x-4 mt-2">
          <button
            onClick={() => setFoodTemperature(true)}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
              foodTemperature === true
                ? 'bg-[#52a35a] text-white'
                : 'bg-green-100 text-[#52a35a] hover:bg-green-200'
            }`}
          >
            <Image src="/check.png" alt="Yes" width={20} height={20} />
            <span>Yes</span>
          </button>
          <button
            onClick={() => setFoodTemperature(false)}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
              foodTemperature === false
                ? 'bg-[#e05e97] text-white'
                : 'bg-red-100 text-[#e05e97] hover:bg-red-200'
            }`}
          >
            <Image src="/cancel.png" alt="No" width={20} height={20} />
            <span>No</span>
          </button>
        </div>
        {foodTemperature === false && (
          <textarea
            value={temperatureIssue}
            onChange={(e) => setTemperatureIssue(e.target.value)}
            placeholder="What issue?"
            className="mt-2 w-full border p-2 rounded-md text-sm"
          />
        )}
      </div>

      {/* How was the variety of food options available? */}
      <div>
        <p className="text-gray-700 font-medium">How was the variety of food options available? </p>
        {renderStars(foodVariety, setFoodVariety)}
      </div>

      {/* How would you rate the cleanliness and ambiance of the dining area? */}
      <div>
        <p className="text-gray-700 font-medium">How would you rate the cleanliness and ambiance of the dining area? </p>
        {renderStars(diningCleanAmbiance, setDiningCleanAmbiance)}
      </div>

      {/* How was the speed of service? */}
      <div>
        <p className="text-gray-700 font-medium">How was the speed of service? </p>
        {renderStars(serviceSpeed, setServiceSpeed)}
      </div>

      {/* Was the staff friendly and attentive? */}
      <div>
        <p className="text-gray-700 font-medium">Was the staff friendly and attentive? </p>
        {renderStars(staffAttentiveness, setStaffAttentiveness)}
      </div>

      {/* How would you rate the value for the price? */}
      <div>
        <p className="text-gray-700 font-medium">How would you rate the value for the price? </p>
        {renderStars(valueForPrice, setValueForPrice)}
      </div>

      {/* Would you recommend our food service? */}
      <div>
        <p className="text-gray-700 font-medium">Would you recommend our food service? </p>
        <div className="flex space-x-4 mt-2">
          <button
            onClick={() => setRecommendFoodService(true)}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
              recommendFoodService === true
                ? 'bg-[#52a35a] text-white'
                : 'bg-green-100 text-[#52a35a] hover:bg-green-200'
            }`}
          >
            <Image src="/check.png" alt="Yes" width={20} height={20} />
            <span>Yes</span>
          </button>
          <button
            onClick={() => setRecommendFoodService(false)}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 ${
              recommendFoodService === false
                ? 'bg-[#e05e97] text-white'
                : 'bg-red-100 text-[#e05e97] hover:bg-red-200'
            }`}
          >
            <Image src="/cancel.png" alt="No" width={20} height={20} />
            <span>No</span>
          </button>
        </div>
        {recommendFoodService === false && (
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
          placeholder="Let us know how we can make your next dining experience better!"
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

export default RatingForm2;