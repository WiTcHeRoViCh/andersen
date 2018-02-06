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
      curFilterId: null,
    };
  }

  render() {
    return (
      <div id="main-container">
        <h1 id="todo-title">TODO list</h1>

        <TodoForm handleAddTodo={this.AddTodo} todoList={this.state.todoList}/>

        <DisplayTodosList todoList={this.state.todoList}
          handleRequestDelete = {this.handleRequestDelete}
          handleCheck = {this.handleCheck} curFilterId={this.state.curFilterId}/>

        {
          (this.state.todoList.length > 0) ?
            <TodoListInf todoList={this.state.todoList}
              handleCompletedClean={this.handleCompletedClean}
              handleSelect={this.handleSelect} curFilterId={this.state.curFilterId}/> : null
        }
      </div>
    );
  }


  AddTodo = (todo) => {
    let todoList = Array.from(this.state.todoList);
    todoList.push({text: todo, isComplete: false});

    this.setState({todoList});
  }

  handleRequestDelete = (id) => {
    let todoList = Array.from(this.state.todoList);
    todoList.splice(id, 1);

    this.setState({todoList})
  }

  handleCheck = (id) => {
    let todoList = Array.from(this.state.todoList);

    todoList[id].isComplete == true ? todoList[id].isComplete = false : todoList[id].isComplete = true;
    this.setState({todoList});
  }

  handleCompletedClean = () => {
    const todoList = this.state.todoList.filter( (todo) => todo.isComplete === false );

    this.setState({todoList});
  }

  handleSelect = (curFilterId) => {
    this.setState({curFilterId})
  }
}

export default App;
