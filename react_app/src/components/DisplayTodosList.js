import React, { Component } from 'react';
import TodoElement from './TodoElement';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTodoFromdb, toggleTodo, getTodoList } from '../actions/index';

import constants from '../constants/constants';

import '../styles/DisplayTodosList.css';

class DisplayTodosList extends Component {

  componentWillMount() {
    this.props.getTodoList()
  }

  render (){
    const { todoList, findTodo, filterFunctionType } = this.props;
    const chipData = this.filterTodoList(todoList, findTodo, filterFunctionType).map( (todo, id) => {
      return (
        <TodoElement
          key={id}
          todo={todo}
          handleCheck={(id) => this.props.toggleTodo(id, this.props)}
          handleRequestDelete={this.props.deleteTodoFromdb}
        />
      );
    });

    return (
      <div id="todos-list">
        {chipData}
      </div>
    )
  }

  filterTodoList = (todos, findTodo, filterFunctionType) => {
    const filterFunction = constants.filterFunctions[filterFunctionType];
    todos = findTodo ? todos.filter( todo => todo.text.includes(findTodo) ) : todos; //findTodo it is word for search when in search mode

    return filterFunction(todos);
  }
}

const mapStateToProps = ({todoList, filter}) => {
  return {
      todoList: todoList.todoList,
      filterFunctionType: filter.filterFunctionType,
      findTodo: filter.findTodo,
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteTodoFromdb, toggleTodo, getTodoList
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayTodosList)
