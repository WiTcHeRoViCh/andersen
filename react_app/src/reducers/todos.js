import * as t from "../constants/ActionTypes";

const initialState = {
  todoList: [],
  getTodoListRequest: false,
  getTodoListSuccess: false,
  getTodoListFailure: false,
}

export default function todos(state=initialState, action) {
  switch(action.type){

    case t.TOGGLE_TODO:
      return { ...state, todoList: state.todoList.map( todo => (todo.id === action.id) ? {...todo, isComplete: !todo.isComplete} : todo ) }

    case t.DELETE_TODO:
      return { ...state, todoList: state.todoList.filter( todo => todo.id !== action.id ) }

    case t.DELETE_COMPLETED:
      return { ...state, todoList: state.todoList.filter( todo => todo.isComplete === false ) }


    case `${t.GET_TODO_LIST} ${t.REQUEST}`:
      return {...state, getTodoListRequest: true}

    case `${t.GET_TODO_LIST} ${t.SUCCESS}`:
      return {...state, todoList: action.res, getTodoListSuccess: true}

    case `${t.GET_TODO_LIST} ${t.FAILURE}`:
      return {...state, getTodoListFailure: true}


    case t.ADD_TODO_TO_DB:
      return { ...state, todoList: [...state.todoList, action.todo], getTodoListSuccess: true }

    default:
      return state;
  }
}