import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { showFilteredTodos } from '../actions/index';
import { connect } from 'react-redux';
import constants from '../constants/constants';

class RenderButtons extends Component {

  render() {
    const buttons = constants.buttons.map( (button, id) => {

        return (
          <MuiThemeProvider key={id}>
            <FlatButton
              label={button.label}
              id={id}
              onClick={ e => this.props.handleClick(button.filterFunctionType) }
            />
          </MuiThemeProvider>
        );

      })

    return (
     <div>{buttons}</div>
    );
  }
}

export default connect(
  state => ({

  }),
  dispatch => ({
    handleClick: filterFunctionType => dispatch(showFilteredTodos(filterFunctionType)),
  })
)(RenderButtons)
