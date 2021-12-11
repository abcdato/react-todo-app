import './Task.css';
import { formatDistanceToNow } from 'date-fns';

import { Component } from 'react';

export default class Task extends Component {
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

    const timeCreated = formatDistanceToNow(creationDate, {
      includeSeconds: true,
    });
    
  let style = active ? 'active' : 'completed';

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
            // onBlur={this.onSubmit}
          />
        </form>
      </li>
    );
