import React, { Component } from 'react';
import logo from './logo.svg';
import TodoForm from './Form';
import DisplayTodosList from './DisplayTodosList';
import TodoListInf from './TodoListInf';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
    };
  }

  render() {
    return (
      <div id="main-container">
        <h1 id="todo-title">TODO list</h1>

        <TodoForm handleAddTodo={this.AddTodo} todoList={this.state.todoList}/>

        <DisplayTodosList todoList={this.state.todoList}
          handleRequestDelete = {this.handleRequestDelete} setCompleteStatus = {this.setCompleteStatus}/>

        {
          (this.state.todoList.length > 0) ? <TodoListInf todoList={this.state.todoList} /> : null
        }
      </div>///
    );
  }

  AddTodo = (todo) => {
    let todoList = Array.from(this.state.todoList);
    todoList.push({text: todo, complete: false});

    this.setState({todoList});
  }

  handleRequestDelete = (id) => {
    let todoList = Array.from(this.state.todoList);
    todoList.splice(id, 1);

    this.setState({todoList})
  }

  setCompleteStatus = (id) => {
    let todoList = Array.from(this.state.todoList);

    todoList[id].complete == true ? todoList[id].complete = false : todoList[id].complete = true;
    this.setState({todoList});
  }
}

export default App;
