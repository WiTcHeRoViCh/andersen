import * as types from '../constants/ActionTypes';

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = types.VISIBILITY;

export const addTodo = todo => ({ type: types.ADD_TODO, todo });
export const deleteTodo = id => ({ type: types.DELETE_TODO, id });
export const toggleTodo = id => ({ type: types.TOGGLE_TODO, id });
export const deleteCompleted = () => ({ type: types.DELETE_COMPLETED });

export const setFindTodoText = text => ({ type: types.SET_FIND_TODO_TEXT, text });
export const resetFindTodoText = () => ({ type: types.RESET_FIND_TODO_TEXT });

export const showFilteredTodos = (TYPE) => ({ type: TYPE });
