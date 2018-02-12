import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';

import constants from '../constants/constants';

import '../styles/Form.css';
import { addTodo, setFindTodoText, resetFindTodoText } from '../actions/index';

import { connect } from 'react-redux';
class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = this.state = {
      text: "",
      buttonLabel: "To find by",
      hintText: "done",
      isSearch: false,
    }
  }

  render(){
    const { text, buttonLabel, hintText, isSearch } = this.state;

    return (
      <MuiThemeProvider>
        <form id="form" onSubmit = {(e) => this.onSubmit(e, text, isSearch)}>
          <TextField
            hintText={"Write what need to "+hintText }
            onChange = { (e) => this.handleChange(e, isSearch) }
            value={text}
            style={{
              marginLeft: 20,
              fontSize: 19
            }}
          />

          <div id="form-div-element">
            <FlatButton
              label={buttonLabel}
              onClick={() => this.handleClick(buttonLabel, text)}
              style={{marginRight: 20}}
            />

            {
              ( isSearch && text) ?
              <IconButton
                tooltip="Reset seach result"
                onClick={ ()=>{
                  this.setState(this.initialState); this.props.handleResetFindTodoText()
                } }
              >
                <ActionDelete/>
              </IconButton>
              : null
            }
          </div>
        </form>
      </MuiThemeProvider>
    )
  }

  handleClick = (btnLabel, text) => {
    const [buttonLabel, hintText, isSearch]  = (btnLabel === "To find by") ?
    constants.formField.inSearch :
    constants.formField.inAdding;

    this.setState({buttonLabel, hintText, isSearch});
    return (isSearch) ? this.props.setFindTodoText(text) : this.props.handleResetFindTodoText();
  }

  handleChange = (e, isSearch) => {
    let textField = e.target;
    let value = textField.value;

    this.setState({text: value});
    (isSearch) ? this.props.setFindTodoText(value) : null;
  }

  onSubmit = (e, text, isSearch) => {
    e.preventDefault();
    if (text.length <= 0 || isSearch) return

    const todo = {
      id: Date.now().toString(),
      text: text,
      isComplete: false,
    }

    this.setState(this.initialState);
    this.props.handleAddTodo(todo);
  }

}

export default connect(
  state => ({
    text: state.filter.findTodo,
  }),
  dispatch => ({
    handleAddTodo: todo => dispatch(addTodo(todo)),
    setFindTodoText: text => dispatch(setFindTodoText(text)),
    handleResetFindTodoText: () => dispatch(resetFindTodoText()),
  })
)(Form)
