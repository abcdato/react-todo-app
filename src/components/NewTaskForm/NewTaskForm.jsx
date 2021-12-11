import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NewTaskForm.css';

export default class NewTaskForm extends Component {
  static propTypes = {
    handleAdd: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      label: '',
    };
  }

  onChange = (event) => {
    this.setState({
      label: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { label } = this.state;
    const { handleAdd } = this.props;

    if (label.trim() === '') {
      this.setState({
        label: '',
      });
      return;
    }
    handleAdd(label);
    this.setState({
      label: '',
    });
  };

  render() {
    const { label } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input className="new-todo" placeholder="What needs to be done?" value={label} onChange={this.onChange} />
      </form>
    );
  }
}
