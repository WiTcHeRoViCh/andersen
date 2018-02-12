import React, { Component } from 'react';
import TodoElement from './TodoElement';
import { connect } from 'react-redux';

import '../styles/DisplayTodosList.css';

class DisplayTodosList extends Component {

  componentWillReceiveProps(props){
  }

  render (){
    const { todoList, findTodo } = this.props;
    const chipData = this.filterTodoList(todoList, findTodo).map( (todo, id) => {
      return (
        <TodoElement
          key={id}
          todo={todo}
          todos={[]}
        />
      );
    });

    return (
      <div id="todos-list">
        {chipData}
      </div>
    )
  }

  filterTodoList = (todos, findTodo) => {
    todos = findTodo ? todos.filter( todo => todo.text.includes(findTodo) ) : todos; //findTodo it is word for search when in search mode

    return this.props.filterFunction(todos);
  }
}

export default connect(
  state => ({
    todoList: state.todoList,
    filterFunction: state.filter.filterFunction,
    findTodo: state.filter.findTodo,
  }),
  null,
)(DisplayTodosList)
