import { formatDistanceToNow } from 'date-fns';
import { Component } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

export default class Task extends Component {
  static defaultProps = {
    label: 'Default task',
    done: false,
    editing: false,
    creationDate: Date.now(),
  };

  static propTypes = {
    label: PropTypes.string,
    done: PropTypes.bool,
    editing: PropTypes.bool,
    creationDate: PropTypes.string,
    handleDelete: PropTypes.func.isRequired,
    onToggleDone: PropTypes.func.isRequired,
    onToggleEditing: PropTypes.func.isRequired,
  };

  state = {
    label: this.props.label,
  };

  onChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.label.trim() === '') {
      this.props.handleDelete();
      return;
    }

    this.props.handleEdit(this.props.id, this.state.label);
    this.props.onToggleEditing(this.props.id);
  };

  render() {
    const {
      label,
      handleDelete,
      onToggleDone,
      onToggleEditing,
      done,
      editing,
      creationDate,
    } = this.props;

    const timeCreated = formatDistanceToNow(new Date(creationDate), {
      includeSeconds: true,
    });

    const className = done ? 'completed' : editing ? 'editing' : 'active';

    return (
      <li className={className}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={done}
            onChange={onToggleDone}
          />
          <label>
            <span className="description">{label}</span>
            <span className="created">created {timeCreated} ago</span>
          </label>
          <button className="icon icon-edit" onClick={onToggleEditing}></button>
          <button className="icon icon-destroy" onClick={handleDelete}></button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="edit"
            value={this.state.label}
            onChange={this.onChange}
          />
        </form>
      </li>
    );
  }
}
