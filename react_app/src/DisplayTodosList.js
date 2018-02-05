import React, { Component } from 'react';
import TodoElement from './TodoElement';

import './DisplayTodosList.css';

class DisplayTodosList extends Component {

  constructor(props){
    super(props);
    this.state = {
      chipData: []
    }

    this.handleRequestDelete = this.props.handleRequestDelete.bind(this);
    this.setCompleteStatus = this.props.setCompleteStatus.bind(this);
  }

  render (){
    this.state.chipData = this.props.todoList.map((todo, id) => {

      return (
        <TodoElement key={id} todo={todo} handleRequestDelete = {this.handleRequestDelete}
          setCompleteStatus={this.setCompleteStatus} id={id}/>///
      );

    });

    return (
      <div id="todos-list">
        {this.state.chipData}
      </div>///
    )
  }
}

export default DisplayTodosList;
