import React, { useState } from 'react';
import Todolist from '../components/TodoList';
import Sidebar from '../components/Sidebar';

const TaskPage = () => {
  // Assume you have task data to pass to the DyslexiaTask component
  const taskData = {
    question: 'Sample question?',
    options: ['Option A', 'Option B', 'Option C'],
  };

  useEffect(() => {
    getuserList();
  }, []);
  
  
  useEffect(() => {
    // const dyslexiaLevel = userList[0].score
    console.log("dislexiaaaaaaaaaa",userList)
    if(userList[0]){
      dyslexiaLevel = userList[0].score
  
    let links = [];
    if (dyslexiaLevel >= 9) {
      links = lowDyslexiaGames;
    } else if (dyslexiaLevel >= 7) {
      links = medDyslexiaGames;
    } else {
      links = highDyslexiaGames;
    }
    
    setGameLinks(links);
  }
  }, [dyslexiaLevel,userList]);

  return (
    <div className='flex flex-row'>
      <Sidebar />
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Task Page</h1>

      {/* Render the DyslexiaTask component with the taskData */}
      <Todolist taskData={taskData} />
    </div>
    </div>
  );
};

export default TaskPage;