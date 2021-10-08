import './Task.css';
import { formatDistanceToNow } from 'date-fns';

export const Task = ({ label, active, editing, id }) => {
  const timeCreated = formatDistanceToNow(
    new Date(),
    { includeSeconds: true },
    { addSuffix: true }
  );

  let style = active ? 'active' : 'completed';

  if (editing) {
    style = 'editing';
  }

  return (
    <li className={style} key={id}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{label}</span>
          <span className="created">created {timeCreated} ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      <input type="text" className="edit" defaultValue="Editing task" />
    </li>
  );
};
