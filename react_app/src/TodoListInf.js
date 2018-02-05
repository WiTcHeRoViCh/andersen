import React, { Component } from 'react';

class TodoListInf extends Component {
  constructor(props){
    super(props)
    this.state = {
      todoList: []
    }
  }

  render(){
    this.state.todoList = this.props.todoList.filter((todo) => {
      return todo.complete === false;
    });

    return (
      <div>{this.state.todoList.length}</div>
    )
  }
}

export default TodoListInf;