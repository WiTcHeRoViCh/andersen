import * as t from "../constants/ActionTypes";
import constants from '../constants/constants';


const { request, success, failure } = constants.status;
const defaultStatus = { request: false, success: false, failure: false};
const initialState = {
  todoList: [],

  [t.GET_TODO_LIST]: defaultStatus,
  [t.ADD_TODO_TO_DB]: defaultStatus,
  [t.DELETE_TODO_FROM_DB]: defaultStatus,
}

export default function todos(state=initialState, action) {

  switch(action.type){
    case t.TOGGLE_TODO:
      return { ...state, todoList: state.todoList.map( todo => (todo.id === action.id) ? {...todo, isComplete: !todo.isComplete} : todo ) }

//Set new todos list
    case `${t.GET_TODO_LIST} ${t.REQUEST}`:
      return {...state, ...request(action.type) }

    case `${t.GET_TODO_LIST} ${t.SUCCESS}`:
      return {...state, todoList: action.res, ...success(action.type) }

    case `${t.GET_TODO_LIST} ${t.FAILURE}`:
      return {...state, ...failure(action.type) }


//Add todo
    case `${t.ADD_TODO_TO_DB} ${t.REQUEST}`:
      return { ...state, ...request(action.type) }

    case `${t.ADD_TODO_TO_DB} ${t.SUCCESS}`:
      return { ...state, todoList: [...state.todoList, action.todo], ...success(action.type) }

    case `${t.ADD_TODO_TO_DB} ${t.FAILURE}`:
      return { ...state, ...failure(action.type) }


//Delete singl todo
    case `${t.DELETE_TODO_FROM_DB} ${t.REQUEST}`:
      return { ...state, ...request(action.type) }

    case `${t.DELETE_TODO_FROM_DB} ${t.SUCCESS}`:
      return { ...state,
        todoList: state.todoList.filter( todo => todo.id !== action.id ),
        ...success(action.type)
      }

    case `${t.DELETE_TODO_FROM_DB} ${t.FAILURE}`:
      return { ...state, ...failure(action.type) }


//Delete completed todo
    case `${t.DELETE_COMPLETED_FROM_DB} ${t.REQUEST}`:
      return { ...state, ...request(action.type) }

    case `${t.DELETE_COMPLETED_FROM_DB} ${t.SUCCESS}`:
      return { ...state,
        todoList: state.todoList.filter( todo => todo.isComplete === false ),
        ...success(action.type)
      }

    case `${t.DELETE_COMPLETED_FROM_DB} ${t.FAILURE}`:
      return { ...state, ...failure(action.type) }


    default:
      return state;
  }
}