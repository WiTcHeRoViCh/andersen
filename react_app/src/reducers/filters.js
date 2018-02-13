import { SET_FIND_TODO_TEXT, VISIBILITY, RESET_FIND_TODO_TEXT } from "../constants/ActionTypes";

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VISIBILITY;

const initialState = {
  findTodo: "",
  filterFunctionType: SHOW_ALL,
}

export default function filterTodoList(state=initialState, action){
  switch(action.type){
    case SHOW_ALL:
    case SHOW_ACTIVE:
    case SHOW_COMPLETED:
      return {...state, filterFunctionType: action.type }

    case SET_FIND_TODO_TEXT:
      return {...state, findTodo: action.text}

    case RESET_FIND_TODO_TEXT:
      return {...state, findTodo: ""}

    default:
      return state;
  }
}
