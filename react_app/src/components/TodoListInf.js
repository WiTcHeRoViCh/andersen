import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RenderButtons from './RenderButtons';

import '../styles/TodoListInf.css';

export default class TodoListInf extends Component {

  render(){
    const todoList = this.props.todoList.filter( todo => {
      return todo.isComplete === false;
    });

    return (
      <div id="todo-list-settings">
        <div id="active-todo-length">Items left: {todoList.length}</div>
        <div id="filter-todo-list">
          <RenderButtons handleSelect={this.props.handleSelect}/>
        </div>
        <div id="clean-complete-todo-list">
          <MuiThemeProvider>
            {
              (this.props.todoList.filter( todo => todo.isComplete === true).length > 0) ?
                <FlatButton
                  label="Clear completed"
                  name="clean"
                  onClick={ () => this.props.handleCompletedClean() }
                />
                : null
            }
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}
