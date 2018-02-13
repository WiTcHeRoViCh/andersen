import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { setFilterFunctionType } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import constants from '../constants/constants';

class RenderButtons extends Component {
  render() {
    const buttons = constants.buttons.map( (button, id) => {
        return (
          <MuiThemeProvider key={id}>
            <FlatButton
              label={button.label}
              id={id}
              onClick={ () => this.props.setFilterFunctionType(button.filterFunctionType) }
            />
          </MuiThemeProvider>
        );
      })

    return (
     <div>{buttons}</div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    setFilterFunctionType,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(RenderButtons)
