import React, { Component } from 'react';
import TodoElement from './TodoElement';

import './DisplayTodosList.css';

class DisplayTodosList extends Component {

  constructor(props){
    super(props);
    this.state = {
      chipData: [],
    }

    this.handleRequestDelete = this.props.handleRequestDelete.bind(this);
    this.handleCheck = this.props.handleCheck.bind(this);
  }

  render (){

    this.state.chipData = this.sortTodoList(this.props.todoList).map((todo, id) => {

      return (
        <TodoElement key={id} todo={todo} handleRequestDelete = {this.handleRequestDelete}
          handleCheck={this.handleCheck} id={id}/>
      );

    });

    return (
      <div id="todos-list">
        {this.state.chipData}
      </div>
    )
  }

  sortTodoList = (todos) => {
    const filterIdx = this.props.curFilterId;

    if (filterIdx === 1)
      return todos.filter( (todo)=> todo.isComplete === false);
    if (filterIdx === 2)
      return todos.filter( (todo)=> todo.isComplete === true);

    return todos;
  }
}

export default DisplayTodosList;
