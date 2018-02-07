import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';

import constants from './constants/constants';

import '../styles/Form.css';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = this.state = {
      todo: '',
      buttonLabel: "To find by",
      hintText: "done",
      isSearch: false,
    }
  }

  render(){
    const { todo, buttonLabel, hintText, isSearch } = this.state;

    return (
      <form id="form" onSubmit = {(e) => this.onSubmit(e, todo, isSearch)}>

        <MuiThemeProvider>
          <TextField
            hintText={"Write what need to "+hintText }
            onChange = { (e) => this.handleChange(e, isSearch) }
            value={todo}
            name="todo"
            style={{
              marginLeft: 20,
              fontSize: 19
            }}
          />

          <div id="form-div-element">
            <FlatButton
              label={buttonLabel}
              onClick={() => this.handleClick(buttonLabel, todo)}
              style={{marginRight: 20}}
            />

            {
              ( isSearch && todo) ?
              <IconButton
                tooltip="Reset seach result"
                onClick={ ()=>{
                  this.setState(this.initialState); this.handleResetSearchResult()
                } }
              >
                <ActionDelete/>
              </IconButton>
              : null
            }
          </div>

        </MuiThemeProvider>

      </form>
    )
  }

  handleClick = (btnLabel, todo) => {
    const [buttonLabel, hintText, isSearch]  = (btnLabel === "To find by") ?
    constants.formField.inSearch :
    constants.formField.inAdding;

    this.setState({buttonLabel, hintText, isSearch});
    (isSearch) ? this.props.setFindTodo(todo) : this.handleResetSearchResult();
  }

  handleChange = (e, isSearch) => {
    let todo = e.target;

    let name = todo.name;
    let value = todo.value;

    this.setState({[name]: value});

    (isSearch === true) ? this.props.setFindTodo(value) : null;
  }

  onSubmit = (e, todo, isSearch) => {
    e.preventDefault();
    if (todo.length <= 0 || isSearch) return

    this.setState(this.initialState);
    this.props.handleAddTodo(todo);
  }

  handleResetSearchResult = () => {
    this.props.handleResetSearchResult();
  }
}
