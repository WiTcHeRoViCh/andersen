import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import TodoForm from './Form';
import DisplayTodosList from './DisplayTodosList';
import TodoListInf from './TodoListInf';

import '../styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div id="main-container">
        <h1 id="todo-title">TODO list</h1>
        <TodoForm />
        <DisplayTodosList />
        <TodoListInf />
      </div>
    );
  }
}
