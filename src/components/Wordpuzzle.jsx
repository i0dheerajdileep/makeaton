import React,{useState} from 'react'

const assessmentWords = ['Elephant', 'Apple', 'Programming', 'Ocean']; // Add more words as needed

function Wordpuzzle() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userScore, setUserScore] = useState(1);
  const [userAnswer, setUserAnswer] = useState('');

  const currentWord = assessmentWords[currentWordIndex];

  const handleAnswerSubmission = () => {
    // Check if the user's answer matches the current word
    if (userAnswer.toLowerCase() === currentWord.toLowerCase()) {
      setUserScore(userScore + 1);
    }

    // Move to the next word
    if (currentWordIndex +1 < assessmentWords.length) {
      setCurrentWordIndex(currentWordIndex + 1);
      setUserAnswer(''); // Clear the user's answer for the next word
    } else {
      // End of assessment, you can navigate to another page or show a summary
      alert(`Assessment completed! Your score: ${userScore}/${assessmentWords.length}`);
    }
  };

  return (
    <div className='flex justify-start items-center pt-36 w-full text-4xl font-bold flex-col ml-40'>
        <div>
        <h1 className='text-indigo-600 '> Write the given word in the input box </h1>
        <div className='bg-slate-200 h-full flex flex-col justify-start items-center gap-y-10 p-10 mt-10 rounded-2xl'>
          <h1>{currentWord}</h1> 
          <div className='flex flex-col justify-center items-center gap-y-10 '>
            <input
              type='text'
              name='userAnswer'
              id='userAnswer'
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className='border-2 rounded-xl'
            />
            <button onClick={handleAnswerSubmission} className='text-sm  bg-indigo-600 text-white rounded-xl w-36 p-5'>Submit Answer</button>
          </div>
        </div>

        </div>
      </div>
  )
}

export default Wordpuzzle