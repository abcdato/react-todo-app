import Task from '../Task/Task';
import PropTypes from 'prop-types';

import './TaskList.css';

export const TaskList = ({
  todos,
  handleDelete,
  handleEdit,
  onToggleDone,
  onToggleEditing,
}) => {
  const tasks = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <Task
        key={id}
        id={id}
        {...itemProps}
        handleDelete={() => handleDelete(id)}
        handleEdit={handleEdit}
        onToggleDone={() => onToggleDone(id)}
        onToggleEditing={() => onToggleEditing(id)}
      />
    );
  });

  return (
    <section className="main">
      <ul className="todo-list">{tasks}</ul>
    </section>
  );
};

TaskList.defaultProps = {
  handleDelete: () => {},
  handleEdit: () => {},
  onToggleDone: () => {},
  onToggleEditing: () => {},
};

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDelete: PropTypes.func,
  handleEdit: PropTypes.func,
  onToggleDone: PropTypes.func,
  onToggleEditing: PropTypes.func,
};
