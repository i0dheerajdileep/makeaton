import React from 'react';
import GameComponent from '../components/gamecomponent';
import Sidebar from '../components/Sidebar';

const TaskPage = () => {
  const gameLinks = [
    'https://amey-thakur.github.io/THE-MATH-GAME/',
    // 'https://trident09.github.io/Hangman/',
    // Add more game links as needed
  ];

 return (
    <div className="flex">
      <Sidebar />
    <div className="flex justify-between items-center">
      <div className="mx-auto">
        <h1 className="text-2xl font-bold mb-4">Task Page</h1>
      </div>

      <div className="flex flex-row ">
        {gameLinks.map((link, index) => (
          <GameComponent key={index} githubLink={link} />
        ))}
      </div>
    </div>
     </div>
  );
};

export default TaskPage;
