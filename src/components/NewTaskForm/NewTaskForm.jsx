import { Component } from 'react';

import './NewTaskForm.css';

export default class NewTaskForm extends Component {
  state = {
    label: '',
  };

  debounce = (fn, debounceTime) => {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn.apply(this, args);
      }, debounceTime);
    };
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
          onChange={this.onChange}
          value={this.state.label}
          autoFocus
        ></input>
      </form>
    );
  }
}
