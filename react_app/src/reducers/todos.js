import * as t from "../constants/ActionTypes";
import constants from '../constants/constants';


const { request, success, failure } = constants.status;
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

//Set new todos list
    case `${t.GET_TODO_LIST} ${t.REQUEST}`:
      return {...state, ...request }

    case `${t.GET_TODO_LIST} ${t.SUCCESS}`:
      return {...state, todoList: action.res, ...success }

    case `${t.GET_TODO_LIST} ${t.FAILURE}`:
      return {...state, ...failure }


//Add todo
    case `${t.ADD_TODO_TO_DB} ${t.REQUEST}`:
      return { ...state, ...request }

    case `${t.ADD_TODO_TO_DB} ${t.SUCCESS}`:
      return { ...state, todoList: [...state.todoList, action.todo], ...success }

    case `${t.ADD_TODO_TO_DB} ${t.FAILURE}`:
      return { ...state, ...failure }


//Delete singl todo
    case `${t.DELETE_TODO_FROM_DB} ${t.REQUEST}`:
      return { ...state, ...request }

    case `${t.DELETE_TODO_FROM_DB} ${t.SUCCESS}`:
      return { ...state,
        todoList: state.todoList.filter( todo => todo.id !== action.id ),
        ...success
      }

    case `${t.DELETE_TODO_FROM_DB} ${t.FAILURE}`:
      return { ...state, ...failure }


//Delete completed todo
    case `${t.DELETE_COMPLETED_FROM_DB} ${t.REQUEST}`:
      return { ...state, ...request }

    case `${t.DELETE_COMPLETED_FROM_DB} ${t.SUCCESS}`:
    console.log(state)
      return { ...state,
        todoList: state.todoList.filter( todo => todo.isComplete === false ),
        ...success
      }

    case `${t.DELETE_COMPLETED_FROM_DB} ${t.FAILURE}`:
      return { ...state, ...failure }


    default:
      return state;
  }
}