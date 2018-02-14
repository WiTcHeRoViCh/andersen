import * as t from '../constants/ActionTypes';
import firebase from '../firebaseConfig';

export const toggleTodo = id => ({ type: t.TOGGLE_TODO, id });
export const setFindTodoText = text => ({ type: t.SET_FIND_TODO_TEXT, text });
export const resetFindTodoText = () => ({ type: t.RESET_FIND_TODO_TEXT });
export const setFilterFunctionType = (TYPE) => ({ type: TYPE });

const db = firebase.database().ref();

export const getTodoList = (todo) => dispatch => {
  dispatch({ type: `${t.GET_TODO_LIST} ${t.REQUEST}` });

  setTimeout( () => {
    db.child("todoList").once('value').then( todos => {
      if (todos.val()) {
        todos = Object.values( todos.val() );
        dispatch( { type: `${t.GET_TODO_LIST} ${t.SUCCESS}`, res: todos } );
      }
    })
    .catch( error => {
      dispatch( {type: `${t.GET_TODO_LIST} ${t.FAILURE}`, res: error } );
      console.log(error);
    })
  }, 1000 );

}

export const addTodoTodb = todo => dispatch => {
  dispatch({ type: `${t.ADD_TODO_TO_DB} ${t.REQUEST}` });

  const newTodo = db.child("todoList/"+todo.id);

  setTimeout( ()=> {
    newTodo.set(todo).then( response => {
      dispatch( {type: `${t.ADD_TODO_TO_DB} ${t.SUCCESS}`, todo: todo} )
    })
    .catch( error => {
      dispatch( {type: `${t.ADD_TODO_TO_DB} ${t.FAILURE}`} )
      console.log(error);
    })
  }, 4000);
}

export const deleteTodoFromdb = id => dispatch => {
  dispatch({ type: `${t.DELETE_TODO_FROM_DB} ${t.REQUEST}` });

  const dbTodo = db.child("todoList/"+id);

  setTimeout( () => {
    dbTodo.child("todoList/"+id).remove().then ( response => {
      dispatch({ type: `${t.DELETE_TODO_FROM_DB} ${t.SUCCESS}`, id: id });
    })
    .catch( error => {
      dispatch({ type: `${t.DELETE_TODO_FROM_DB} ${t.FAILURE}` });
      console.log(error);
    })
  }, 3000 );
}

export const deleteCompletedFromdb = (completedTodosId) => dispatch => {
  dispatch({ type: `${t.DELETE_COMPLETED_FROM_DB} ${t.REQUEST}` });

  setTimeout( ()=>{
    db.child("todoList").once('value').then( response => {
      completedTodosId.forEach( todoId => {
        db.child("todoList/"+todoId).remove();
      });

      dispatch({ type: `${t.DELETE_COMPLETED_FROM_DB} ${t.SUCCESS}` });
    })
    .catch( error => {
      dispatch({ type: `${t.DELETE_COMPLETED_FROM_DB} ${t.FAILURE}` });
      console.log(error);
    })
  }, 2000 );
}
