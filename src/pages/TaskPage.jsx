import React, { useState } from 'react';
import Todolist from '../components/TodoList';
import Sidebar from '../components/Sidebar';

const TaskPage = () => {
  // Assume you have task data to pass to the DyslexiaTask component
  const taskData = {
    question: 'Sample question?',
    options: ['Option A', 'Option B', 'Option C'],
  };

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