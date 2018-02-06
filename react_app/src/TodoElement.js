import React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/done';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/done';

import './TodoElement.css'

class TodoElement extends Component {
  constructor(props){
    super(props);
  }

  render () {
    const chipStyle = {
      chip: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 1,
        height: 50,

        backgroundColor: "white",
        borderRadius: 0,
      },
      labelStyle: {
        display: "flex",
        flexDirection: "row",
      }
    }
    return (
      <MuiThemeProvider>

        <Chip onRequestDelete={() => this.props.handleRequestDelete(this.props.todo)} style= {chipStyle.chip}
         labelStyle={chipStyle.labelStyle} className = "todo-element">

          <Checkbox
            defaultChecked={this.props.todo.isComplete}
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            onCheck={() => this.props.handleCheck(this.props.id)}
          />

          {this.props.todo.text}
        </Chip>

      </MuiThemeProvider>
    )
  }
}

export default TodoElement;
