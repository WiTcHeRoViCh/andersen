import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import constants from './constants/constants';

export default class RenderButtons extends Component {

  render() {
    const buttons = constants.buttons.map( (button, id) => {

        return (
          <MuiThemeProvider key={id}>
            <FlatButton
              label={button.label}
              id={id}
              onClick={ e => this.props.handleSelect(button.filterFunction) }
            />
          </MuiThemeProvider>
        );

      })

    return (
     <div>{buttons}</div>
    );
  }
}