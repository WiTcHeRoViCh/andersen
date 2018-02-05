import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = this.state = {
      todo: ''
    },

    this.handleAddTodo = this.props.handleAddTodo;
    this.todoList = this.props.todoList;
  }

  render(){
    return (
      <form id="form" onSubmit = {this.onSubmit}>

        <MuiThemeProvider>
          <TextField
            hintText="Write what need to done"
            onChange = {this.handleChange}
            value={this.state.todo}
            name="todo"
            style={{
              marginLeft: 20,
              fontSize: 19
            }}
            />
        </MuiThemeProvider>

      </form>///
    )
  }

  handleChange = (e) => {
    let todo = e.target;

    let name = todo.name;
    let value = todo.value;

    this.setState({[name]: value})
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.todo.length <= 0) return

    this.setState(this.initialState);
    this.handleAddTodo(this.state.todo);
  }
}

export default Form;
