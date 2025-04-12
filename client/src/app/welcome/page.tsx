"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import bgImage from '@/assets/images/pexels-pixabay-258154 (1).jpg';


const WelcomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const constantText = "Welcome to Paradise Resort — where ";
  const phrases = [
    "relaxation meets elegance.",
    "nature and luxury blend beautifully.",
    "every sunrise feels like a dream.",
    "your getaway becomes unforgettable.",
    "serenity finds you.",
    "memories are made to last forever.",
    "tranquility surrounds you."
  ];

  const [textLoaded, setTextLoaded] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 50;
  const deletingSpeed = 30;
  const pauseAfterTyping = 2000;
  const loadingDuration = 1000;

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setTextLoaded(true);
      setDisplayText(phrases[0]);
    }, loadingDuration);
    return () => clearTimeout(textTimer);
  }, []);

  useEffect(() => {
    if (!textLoaded) return;

    const timer = setTimeout(() => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        setDisplayText(prev => {
          const newText = prev.slice(0, -1);
          if (newText.length === 0) {
            setIsDeleting(false);
            setCurrentPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length);
          }
          return newText;
        });
      } else {
        setDisplayText(prev => {
          const newText = currentPhrase.slice(0, prev.length + 1);
          if (newText.length === currentPhrase.length) {
            setTimeout(() => setIsDeleting(true), pauseAfterTyping);
          }
          return newText;
        });
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIndex, phrases, textLoaded]);

  return (
    <div
      id="WelcomePage"
      className={`relative h-screen w-full flex items-center justify-center text-white text-center overflow-hidden`}
    >
      {/* Background with animation */}
      <div className="absolute inset-0 z-0 animate-zoom bg-black">
        <Image
          src={bgImage}
          alt="Resort Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="scale-animation"
        />
      </div>

      {/* Text content without black background */}
      <div className={`relative z-10 p-6 sm:p-10 rounded-lg max-w-3xl w-full mx-4 backdrop-blur-sm`}>
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-yellow-300 drop-shadow-lg">WELCOME TO PARADISE</h1>
        <p className="text-lg sm:text-xl mb-4 drop-shadow">{constantText}</p>
        <p className="text-lg sm:text-xl mb-6 font-semibold italic text-white drop-shadow">{displayText}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/feedback">
            <button className="bg-transparent border-2 border-yellow-300 text-yellow-300 py-2 px-4 transition duration-500 hover:bg-yellow-300 hover:text-black hover:shadow-lg hover:scale-110">
              Leave Feedback
            </button>
          </Link>
          <Link href="/chatbot">
            <button className="bg-transparent border-2 border-white text-white py-2 px-4 transition duration-500 hover:bg-white hover:text-black hover:shadow-lg hover:scale-110">
              Talk to Our Bot
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
