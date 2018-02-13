import * as t from '../constants/ActionTypes';
import firebase from '../firebaseConfig';

export const deleteTodo = id => ({ type: t.DELETE_TODO, id });
export const toggleTodo = id => ({ type: t.TOGGLE_TODO, id });
export const deleteCompleted = () => ({ type: t.DELETE_COMPLETED });

export const setFindTodoText = text => ({ type: t.SET_FIND_TODO_TEXT, text });
export const resetFindTodoText = () => ({ type: t.RESET_FIND_TODO_TEXT });

export const setFilterFunctionType = (TYPE) => ({ type: TYPE });

const db = firebase.database().ref();
export const getTodoList = (todo) => dispatch => {
  dispatch({ type: `${t.GET_TODO_LIST} ${t.REQUEST}` });

  db.child("todoList").once('value').then( todos => {
    if (todos.val()) {
      todos = Object.values( todos.val() );
      dispatch( { type: `${t.GET_TODO_LIST} ${t.SUCCESS}`, res: todos } );
    }
  }, error => {
    dispatch( {type: `${t.GET_TODO_LIST} ${t.FAILURE}`, res: error } );
  })
};

export const addTodoTodb = todo => dispatch => {
  db.child("todoList/"+todo.id).set(
    dispatch( {type: t.ADD_TODO_TO_DB, todo: todo} ).todo
  )
}

export const deleteTodoFromdb = id => dispatch => {
  db.child("todoList/"+id).remove();
  dispatch(deleteTodo(id));
}
