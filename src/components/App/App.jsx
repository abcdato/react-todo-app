import React, { Component } from 'react';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import { TaskList } from '../TaskList/TaskList';
import { Footer } from '../Footer/Footer';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

export default class App extends Component {
  state = {
    todoData: [
      this.createTask('First task'),
      this.createTask('Second task'),
      this.createTask('Third task'),
    ],
    filter: 'all',
  };

  createTask(label) {
    return {
      label,
      done: false,
      editing: false,
      creationDate: new Date(),
      id: uuidv4(),
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

  addEditedItem = (id, updateItem) => {
    this.setState(({ todoData }) => {
      const newArr = [...todoData];
      const ind = newArr.findIndex((el) => el.id === id);
      newArr[ind] = updateItem;
      return {
        todoData: newArr,
      };
    });
  };

  handleAdd = (label) => {
    const newTask = this.createTask(label);

    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, newTask],
      };
    });
  };

  handleEdit = (id, text) => {
    this.setState(({ todoData }) => {
      const newTodos = [...todoData].map((todo) => {
        if (todo.id === id) {
          todo.label = text;
        }
        return todo;
      });
      return {
        todoData: newTodos,
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

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const completedTasks = todoData.filter((todo) => !todo.done);

      return {
        todoData: completedTasks,
      };
    });
  };

  filterTasks(todos, filter) {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter((todo) => !todo.done);
      case 'completed':
        return todos.filter((todo) => todo.done);
      default:
        return todos;
    }
  }

  render() {
    const { todoData, filter } = this.state;
    const itemsDone = todoData.filter((todo) => todo.done).length;
    const itemsLeft = todoData.length - itemsDone;
    const filteredTasks = this.filterTasks(todoData, filter);

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm handleAdd={this.handleAdd} />
        </header>
        <TaskList
          todos={filteredTasks}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          addEditedItem={this.addEditedItem}
          onToggleDone={this.onToggleDone}
          onToggleEditing={this.onToggleEditing}
        />
        <Footer
          itemsLeft={itemsLeft}
          clearCompleted={this.clearCompleted}
          filter={filter}
          onFilterChange={this.onFilterChange}
        />
      </section>
    );
  }
}
