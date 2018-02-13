import { combineReducers } from 'redux';
import todos from "./todos";
import filter from "./filters";

export default combineReducers({
  todoList: todos,
  filter,
});
