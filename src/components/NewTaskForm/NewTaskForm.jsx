import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  static propTypes = {
    handleAdd: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      label: '',
      minutes: '',
      seconds: '',
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { label, minutes, seconds } = this.state;
    const { handleAdd } = this.props;

    if (label.trim() === '') {
      this.setState({
        label: '',
        minutes: '',
        seconds: '',
      });
      return;
    }

    handleAdd(label, minutes, seconds);

    this.setState({
      label: '',
      minutes: '',
      seconds: '',
    });
  };

  render() {
    const { label, minutes, seconds } = this.state;

    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          type="text"
          name="label"
          value={label}
          onChange={this.onChange}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          type="number"
          name="minutes"
          min="0"
          max="60"
          value={minutes}
          onChange={this.onChange}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          type="number"
          name="seconds"
          min="0"
          max="59"
          value={seconds}
          onChange={this.onChange}
        />
        <input className="visually-hidden" type="submit" value="Submit" />
      </form>
    );
  }
}
