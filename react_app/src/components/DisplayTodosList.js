import React, { Component } from 'react';
import TodoElement from './TodoElement';

import '../styles/DisplayTodosList.css';

export default class DisplayTodosList extends Component {

  render (){
    const { todoList, filterFunction, handleRequestDelete, findTodo, handleCheck } = this.props;

    const chipData = this.filterTodoList(todoList, findTodo, filterFunction).map( (todo, id) => {
      return (
        <TodoElement
          key={id}
          todo={todo}
          handleRequestDelete = {handleRequestDelete}
          handleCheck={handleCheck}
          id={id}
        />
      );
    });

    return (
      <div id="todos-list">
        {chipData}
      </div>
    )
  }

  filterTodoList = (todos, findTodo, filterFunction) => {
    todos = findTodo ? todos.filter( todo => todo.text.includes(findTodo) ) : todos; //findTodo it is word for search when in search mode

    return filterFunction(todos);
  }
}
