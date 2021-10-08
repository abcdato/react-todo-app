import React from 'react';
import './NewTaskForm.css';

export const NewTaskForm = () => {
  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
    ></input>
  );
};
