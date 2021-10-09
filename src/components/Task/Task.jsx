import { formatDistanceToNow } from 'date-fns';

import './Task.css';

export const Task = ({
  label,
  id,
  onDeleted,
  onToggleDone,
  onToggleEditing,
  done,
  editing,
}) => {
  const timeCreated = formatDistanceToNow(
    new Date(),
    { includeSeconds: true },
    { addSuffix: true }
  );

  const className = done ? 'completed' : editing ? 'editing' : 'active';

  return (
    <li className={className} key={id}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onToggleDone} />
        <label>
          <span className="description">{label}</span>
          <span className="created">created {timeCreated} ago</span>
        </label>
        <button className="icon icon-edit" onClick={onToggleEditing}></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
      <input type="text" className="edit" defaultValue={label} />
    </li>
  );
};
