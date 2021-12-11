import { TasksFilter } from '../TaskFilter/TasksFilter';
import './Footer.css';

export const Footer = ({
  itemsLeft,
  clearCompleted,
  filter,
  onFilterChange,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">{itemsLeft} items left</span>

      <TasksFilter filter={filter} onFilterChange={onFilterChange} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};
