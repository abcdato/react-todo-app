import React, { Component } from 'react';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import { TaskList } from '../TaskList/TaskList';
import { Footer } from '../Footer/Footer';

import './App.css';

export default class App extends Component {
  state = {
    todoData: [
      this.createTask('Completed task'),
      this.createTask('Editing task'),
      this.createTask('Active task'),
    ],
  };

  createTask(label) {
    return {
      label,
      important: false,
      done: false,
      id: Math.floor(Math.random() * (1000 - 1 + 1)) + 1,
    };
  }

  toggleProp(arr, id, propName) {
    const i = arr.findIndex((el) => el.id === id);
    const oldItem = arr[i];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, i), newItem, ...arr.slice(i + 1)];
  }

  handleDelete = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter((todo) => todo.id !== id),
      };
    });
  };

  handleAdd = (label) => {
    const newTask = this.createTask(label);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newTask];
      return {
        todoData: newArr,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProp(todoData, id, 'done'),
      };
    });
  };

  onToggleEditing = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProp(todoData, id, 'editing'),
      };
    });
  };

  render() {
    const { todoData } = this.state;
    const itemsDone = todoData.filter((todo) => todo.done).length;
    const itemsLeft = todoData.length - itemsDone;

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm handleAdd={this.handleAdd} />
        </header>
        <TaskList
          todos={this.state.todoData}
          onDeleted={this.handleDelete}
          onToggleDone={this.onToggleDone}
          onToggleEditing={this.onToggleEditing}
        />
        <Footer itemsLeft={itemsLeft} />
      </section>
    );
  }
}
