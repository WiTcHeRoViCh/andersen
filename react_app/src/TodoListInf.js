import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './TodoListInf.css';

class TodoListInf extends Component {
  constructor(props){
    super(props)
    this.state = {
      todoList: [],
      buttons: [true, false, false],
    }
  }

  select = (e) => {
    const id = +e.target.id;
    let buttons = [false, false, false];
    buttons[id] = true;

    this.setState({buttons})
    this.props.handleSelect(id);
  }


  render(){
    this.state.todoList = this.props.todoList.filter((todo) => {
      return todo.isComplete === false;
    });

    return (
      <div id="todo-list-settings">

        <div id="active-todo-length">Items left: {this.state.todoList.length}</div>

        <div id="filter-todo-list">

          <div id="all-todos">
            <MuiThemeProvider>
              <FlatButton label="All" id="0" primary={this.state.buttons[0]}
                onClick={ (e) => this.select(e) } />
            </MuiThemeProvider>
          </div>

          <div id="active-todos">
            <MuiThemeProvider>
              <FlatButton label="Active" id="1" primary={this.state.buttons[1]}
                onClick={ (e) => this.select(e) } />
            </MuiThemeProvider>
          </div>

          <div id="completed-todos">
            <MuiThemeProvider>
              <FlatButton label="Completed" id="2" primary={this.state.buttons[2]}
                onClick={ (e) => this.select(e) } />
            </MuiThemeProvider>
          </div>

        </div>

        <div id="clean-complete-todo-list">
          <MuiThemeProvider>
            {
              (this.props.todoList.filter((todo) => todo.isComplete === true).length > 0) ?
                <FlatButton label="Clear completed" name="clean" onClick={ () => this.props.handleCompletedClean() } /> : null
            }
          </MuiThemeProvider>
        </div>

      </div>
    )
  }
}

export default TodoListInf;
