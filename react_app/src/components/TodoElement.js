import React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import ActionDone from 'material-ui/svg-icons/action/done';
import constants from '../constants/constants';

import '../styles/TodoElement.css'

export default class extends Component {
  render () {
    const {todo, handleRequestDelete, handleCheck} = this.props;
    const chipStyle = constants.chipStyle;

    return (
      <MuiThemeProvider>

        <Chip
          onRequestDelete={() => handleRequestDelete(todo.id)}
          style= {chipStyle.chip}
          labelStyle={chipStyle.labelStyle}
          className = "todo-element">

          <Checkbox
            defaultChecked={todo.isComplete}
            checkedIcon={<ActionDone />}
            uncheckedIcon={<ActionDone />}
            onCheck={() => handleCheck(todo.id)}
            style={{width: 0}}
          />

          {todo.text}
        </Chip>

      </MuiThemeProvider>
    )
  }
}
