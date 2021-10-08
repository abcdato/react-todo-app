import React, { Component } from 'react';
import { NewTaskForm } from '../NewTaskForm/NewTaskForm';
import { TaskList } from '../TaskList/TaskList';
import { Footer } from '../Footer/Footer';

import './App.css';

export default class App extends Component {
  state = {
    todoData: [
      {
        label: 'Completed task',
        id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
      },
      {
        label: 'Editing task',
        id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
      },
      {
        label: 'Active task',
        id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
      },
    ],
  };

  handleDelete = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter((todo) => todo.id !== id),
      };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <TaskList todos={this.state.todoData} onDeleted={this.handleDelete} />
        <Footer />
      </section>
    );
  }
}
