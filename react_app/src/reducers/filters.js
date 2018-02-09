import { SET_FIND_TODO_TEXT, VISIBILITY, RESET_FIND_TODO_TEXT } from "../constants/ActionTypes";

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VISIBILITY;

const initialState = {
  findTodo: "",
  filterFunction: todos => todos,
}

export default function filterTodoList(state=initialState, action){
  switch(action.type){
    case SHOW_ALL:
      return Object.assign({}, state, { filterFunction: todos => todos} );

    case SHOW_ACTIVE:
      return Object.assign({}, state, { filterFunction: todos => todos.filter( todo => todo.isComplete === false) });

    case SHOW_COMPLETED:
      return Object.assign({}, state, { filterFunction: todos => todos.filter( todo => todo.isComplete === true) });


    case SET_FIND_TODO_TEXT:
      return Object.assign({}, state, {findTodo: action.text});

    case RESET_FIND_TODO_TEXT:
      return Object.assign({}, state, {findTodo: null});
  }

  return state;
}
