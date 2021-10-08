import { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';

import './Task.css';

export default class Task extends Component {
  state = {
    done: false,
    editing: false,
  };

  handleDoneClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  };

  handleEditClick = () => {
    this.setState(({ editing }) => {
      return {
        editing: !editing,
      };
    });
  };

  render() {
    const { label, id, onDeleted } = this.props;
    const { done, editing } = this.state;

    const timeCreated = formatDistanceToNow(
      new Date(),
      { includeSeconds: true },
      { addSuffix: true }
    );

    const className = done ? 'completed' : editing ? 'editing' : 'active';

    return (
      <li className={className} key={id}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={this.handleDoneClick}
          />
          <label>
            <span className="description">{label}</span>
            <span className="created">created {timeCreated} ago</span>
          </label>
          <button
            className="icon icon-edit"
            onClick={this.handleEditClick}
          ></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <input type="text" className="edit" defaultValue={label} />
      </li>
    );
  }
}
