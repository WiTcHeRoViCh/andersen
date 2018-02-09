import React, { Component } from 'react';
import TodoElement from './TodoElement';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTodo, toggleTodo } from '../actions/index';

import '../styles/DisplayTodosList.css';

class DisplayTodosList extends Component {

  render (){
    const { todoList, findTodo, filterFunction } = this.props;
    const chipData = this.filterTodoList(todoList, findTodo, filterFunction).map( (todo, id) => {
      return (
        <TodoElement
          key={id}
          todo={todo}
          handleCheck={(id) => this.props.toggleTodo(id, this.props)}
          handleRequestDelete={this.props.deleteTodo}
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

const mapStateToProps = ({todoList, filter}) => {
  return {
      todoList: todoList,
      filterFunction: filter.filterFunction,
      findTodo: filter.findTodo,
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteTodo, toggleTodo
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayTodosList)
