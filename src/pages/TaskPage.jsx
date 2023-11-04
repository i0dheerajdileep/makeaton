import React, { useState, useEffect } from 'react';
import GameComponent from '../components/gamecomponent';
import Sidebar from '../components/Sidebar';

import { highDyslexiaGames, medDyslexiaGames, lowDyslexiaGames } from '../data/data';
// Import other necessary dependencies

const TaskPage = () => {
  // Assume dyslexiaLevel is a variable representing the user's dyslexia level score
  const dyslexiaLevel = 80; // Example score, replace with your logic to get the actual score

  const [gameLinks, setGameLinks] = useState([]);

  useEffect(() => {
    let links = [];

    if (dyslexiaLevel >= 90) {
      links = highDyslexiaGames;
    } else if (dyslexiaLevel >= 70) {
      links = medDyslexiaGames;
    } else {
      links = lowDyslexiaGames;
    }

    setGameLinks(links);
  }, [dyslexiaLevel]);

  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="flex justify-between items-center w-full p-24 h-full">
        <div className="flex flex-row w-full h-screen">
          {gameLinks.map((link, index) => (
            <GameComponent key={index} githubLink={link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
