import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';

import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = this.state = {
      findTodo: null,
      todo: '',
      buttonLabel: "To find by",
      hintText: "done",
      isSearch: false,
    },

    this.handleAddTodo = this.props.handleAddTodo;
  }

  render(){
    this.state.findTodo = this.props.findTodo;

    return (
      <form id="form" onSubmit = {this.onSubmit}>

        <MuiThemeProvider>
          <TextField
            hintText={"Write what need to "+this.state.hintText }
            onChange = {this.handleChange}
            value={this.state.todo}
            name="todo"
            style={{
              marginLeft: 20,
              fontSize: 19
            }}
          />

          <div id="form-div-element">
            <FlatButton label={this.state.buttonLabel} onClick={this.handleClick} style={{marginRight: 20}}/>

            { this.state.findTodo ?
              <IconButton tooltip="Reset seach result" onClick={ ()=>{
                this.setState(this.initialState); this.handleResetSearchResult()
              } }>
                <ActionDelete/>
              </IconButton>
              : null
            }
          </div>

        </MuiThemeProvider>

      </form>
    )
  }

  handleClick = () => {
    const [buttonLabel, hintText, isSearch]  = this.state.buttonLabel === "To find by" ?
    ["Add new task", "find", true] :
    ["To find by", "done", false];

    this.setState({buttonLabel, hintText, isSearch});
    (isSearch) ? this.props.setFindTodo(this.state.todo) : this.handleResetSearchResult();
  }

  handleChange = (e) => {
    let todo = e.target;

    let name = todo.name;
    let value = todo.value;

    this.setState({[name]: value});

    (this.state.isSearch === true) ? this.props.setFindTodo(value) : null;
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.todo.length <= 0 || this.state.findTodo) return

    this.setState(this.initialState);

    this.handleAddTodo(this.state.todo);
  }

  handleResetSearchResult = () => {
    this.props.handleResetSearchResult();
  }
}

export default Form;
