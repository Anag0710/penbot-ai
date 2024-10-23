"use client"; // Mark this file as a Client Component

import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti'; // Import the Confetti component

const sentences = [
    "The quick brown fox jumps over the lazy dog as it gracefully navigates through the tall grass.",
    "A journey of a thousand miles begins with a single step, and every small effort counts towards achieving greatness.",
    "To be or not to be, that is the question that has puzzled philosophers for centuries, contemplating existence and purpose.",
    "All that glitters is not gold; sometimes, the most valuable things are hidden beneath a surface that appears dull and unremarkable.",
    "The pen is mightier than the sword, as words have the power to inspire, persuade, and change the world more effectively than violence.",
    "Actions speak louder than words, and it is through our deeds that we truly express our beliefs and values to others.",
    "In the depths of winter, I finally learned that within me there lay an invincible summer, a resilience that could withstand any storm.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall, demonstrating our strength and determination.",
    "It is not the years in your life that count, but the life in your years, emphasizing the importance of experiences over mere existence.",
    "Success is not the key to happiness; happiness is the key to success. If you love what you are doing, you will be successful.",
];

function WritingSpeedGame() {
    const [currentSentence, setCurrentSentence] = useState('');
    const [userInput, setUserInput] = useState('');
    const [isGameActive, setIsGameActive] = useState(false);
    const [startTime, setStartTime] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        if (isGameActive) {
            setCurrentSentence(sentences[Math.floor(Math.random() * sentences.length)]);
            setStartTime(Date.now());
        }
    }, [isGameActive]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserInput(event.target.value);

        if (event.target.value === currentSentence) {
            const endTime = Date.now();
            const timeTaken = (endTime - startTime) / 1000; // in seconds
            const wordsTyped = currentSentence.split(' ').length;
            setTypingSpeed(Math.round((wordsTyped / timeTaken) * 60)); // words per minute
            setIsFinished(true);
            setShowConfetti(true); // Show confetti
            setIsGameActive(false);
        }
    };

    const handleStart = () => {
        setIsGameActive(true);
        setUserInput('');
        setIsFinished(false);
        setTypingSpeed(0);
        setShowConfetti(false); // Hide confetti when starting a new game
    };

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#624E88] to-[#7E63AB] text-white p-10'>
            {showConfetti && <Confetti />} {/* Show confetti when the player wins */}
            <h1 className='text-4xl font-bold mb-5'>Typing Speed Game</h1>

            {!isGameActive && !isFinished && (
                <button onClick={handleStart} className='bg-[#7E63AB] px-6 py-2 rounded-full hover:bg-[#5A4974] transition'>
                    Start Game
                </button>
            )}

            {isGameActive && (
                <div className='mb-5'>
                    <h2 className='text-lg'>Type the following sentence:</h2>
                    <p className='text-xl font-semibold'>{currentSentence}</p>
                    <textarea
                        value={userInput}
                        onChange={handleChange}
                        className='mt-4 w-full h-24 p-2 rounded-lg bg-[#45346B] text-white border border-[#624E88]'
                        placeholder='Start typing here...'
                    />
                </div>
            )}

            {isFinished && (
                <div className='text-center'>
                    <h2 className='text-2xl'>Congratulations!</h2>
                    <p className='text-lg'>Your typing speed: {typingSpeed} WPM</p>
                    <button onClick={handleStart} className='bg-[#7E63AB] px-6 py-2 rounded-full hover:bg-[#5A4974] transition mt-4'>
                        Play Again
                    </button>
                </div>
            )}
        </div>
    );
}

export default WritingSpeedGame;
