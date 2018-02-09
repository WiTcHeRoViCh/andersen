import React, { Component } from 'react';
import TodoElement from './TodoElement';
import { connect } from 'react-redux';

import '../styles/DisplayTodosList.css';

class DisplayTodosList extends Component {

  render (){
    const { todoList, findTodo, filterFunction } = this.props;
    const chipData = this.filterTodoList(todoList, findTodo, filterFunction).map( (todo, id) => {
      return (
        <TodoElement
          key={id}
          todo={todo}
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

export default connect(
  state => ({
    todoList: state.todoList,
    filterFunction: state.filter.filterFunction,
    findTodo: state.filter.findTodo,
  }),
  dispatch => ({

  })
)(DisplayTodosList)