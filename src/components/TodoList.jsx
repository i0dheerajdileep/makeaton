import React, { useState } from 'react';

const DyslexiaTodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, question: 'Read a short paragraph and summarize it.' },
    { id: 2, question: 'Solve a mathematical problem.' },
    { id: 3, question: 'Identify the misspelled words in a sentence.' },
    { id: 4, question: 'Write a short story using specific words.' },
    { id: 5, question: 'Listen to a word and spell it.' },
  ]);

  const handleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleSubmit = () => {
    // Add your submission logic here
    console.log("Tasks submitted!");
  };

  return (
    <div className="max-w-full mx-auto mt-8 p-8 border rounded-md bg-gray-100 shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Dyslexia Todo List</h2>

      <ul className="list-disc pl-6">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={task.completed || false}
              onChange={() => handleTaskCompletion(task.id)}
              className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className={`${task.completed ? 'line-through text-gray-500' : 'text-black'}`}>
              {task.question}
            </span>
          </li>
        ))}
      </ul>

      <button
        className="mt-4 p-2 bg-indigo-600 text-white rounded-md"
        onClick={handleSubmit}
      >
        Submit Tasks
      </button>
    </div>
  );
};

export default DyslexiaTodoList;
