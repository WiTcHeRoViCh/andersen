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
        flexDirection: "row"
      }
    }
    return (
      <MuiThemeProvider>

        <Chip onRequestDelete={() => this.handleRequestDelete(this.props.id)} style= {chipStyle.chip}
         labelStyle={chipStyle.labelStyle} className = "todo-element">

          <Checkbox
            defaultChecked={this.props.todo.complete}
            checkedIcon={<ActionFavorite />}
            uncheckedIcon={<ActionFavoriteBorder />}
            onCheck={() => this.props.setCompleteStatus(this.props.id)}
          />

          {this.props.todo.text}
        </Chip>

      </MuiThemeProvider>///
    )
  }

  handleRequestDelete = (id) => {
    this.props.handleRequestDelete(id);
  }
}

export default TodoElement;
