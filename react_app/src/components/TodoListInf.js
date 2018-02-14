import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RenderButtons from './RenderButtons';
import { deleteCompletedFromdb } from '../actions/index';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import '../styles/TodoListInf.css';

class TodoListInf extends Component {

  render(){
    const ActiveTodoList = this.props.todoList.filter( todo => todo.isComplete === false );
    const completedTodoList = this.props.todoList.filter ( todo => todo.isComplete === true);
    const completedTodosId = completedTodoList.map( todo => todo.id);
    const todoListInf =
        <div id="todo-list-settings">
          <div id="active-todo-length">Items left: {ActiveTodoList.length}</div>
          <div id="filter-todo-list">
            <RenderButtons/>
          </div>
          <div id="clean-complete-todo-list">
            <MuiThemeProvider>
              {
                (completedTodoList.length > 0) ?
                  <FlatButton
                    label="Clear completed"
                    name="clean"
                    onClick={ () => this.props.deleteCompletedFromdb(completedTodosId) }
                  />
                  : null
              }
            </MuiThemeProvider>
          </div>
        </div>

    return (
      (this.props.todoList.length > 0) ?
        todoListInf : null
    )
  }
}

const mapStateToProps = ({todoList}) => {
  return {
    todoList: todoList.todoList,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteCompletedFromdb
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListInf)
