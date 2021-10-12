import { TasksFilter } from '../TaskFilter/TasksFilter';
import PropTypes from 'prop-types';

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

Footer.defaultProps = {
  itemsLeft: 3,
  filter: 'all',
  clearCompleted: () => {},
  onFilterChange: () => {},
};

Footer.propTypes = {
  itemsLeft: PropTypes.number,
  filter: PropTypes.string,
  clearCompleted: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func,
};
