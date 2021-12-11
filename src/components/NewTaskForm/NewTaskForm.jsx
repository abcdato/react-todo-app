import { Component } from 'react';
import PropTypes from 'prop-types';

import './NewTaskForm.css';

export default class NewTaskForm extends Component {
  static propTypes = {
    handleAdd: PropTypes.func.isRequired,
  };

  state = {
    label: '',
  };

  onChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.label.trim() === '') {
      this.setState({
        label: '',
      });
      return;
    }
    this.props.handleAdd(this.state.label);
    this.setState({
      label: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={this.state.label}
          onChange={this.onChange}
        ></input>
      </form>
    );
  }
}
