import { TasksFilter } from '../TaskFilter/TasksFilter';

import './Footer.css';

export const Footer = ({ itemsLeft }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{itemsLeft} items left</span>
      <TasksFilter />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};
