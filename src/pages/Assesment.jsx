import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const assessmentWords = ['Elephant', 'Apple', 'Programming', 'Ocean']; // Add more words as needed

function Assesment() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');

  const currentWord = assessmentWords[currentWordIndex];

  const handleAnswerSubmission = () => {
    // Check if the user's answer matches the current word
    if (userAnswer.toLowerCase() === currentWord.toLowerCase()) {
      setUserScore(userScore + 1);
    }

    // Move to the next word
    if (currentWordIndex + 1 < assessmentWords.length) {
      setCurrentWordIndex(currentWordIndex + 1);
      setUserAnswer(''); // Clear the user's answer for the next word
    } else {
      // End of assessment, you can navigate to another page or show a summary
      alert(`Assessment completed! Your score: ${userScore}/${assessmentWords.length}`);
    }
  };

  return (
    <div className='flex flex-row w-screen'>
      <Sidebar />
      <div className='flex justify-center items-start pt-36 w-full text-4xl font-bold '>
        <div className='bg-slate-200 h-full flex flex-col justify-center items-center'>
          <h1>{currentWord}</h1> 
          <div className='flex flex-col '>
            <input
              type='text'
              name='userAnswer'
              id='userAnswer'
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className='border-2 rounded-xl'
            />
            <button onClick={handleAnswerSubmission}>Submit Answer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assesment;
