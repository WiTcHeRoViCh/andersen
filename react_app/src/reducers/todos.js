import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, DELETE_COMPLETED } from "../constants/ActionTypes";

export default function todos(state=[], action) {
  switch(action.type){
    case ADD_TODO:
      return [...state, action.todo]

    case TOGGLE_TODO:
      console.log("prev state",state)
      let newState = state.map( todo => (todo.id === action.id) ? Object.assign(todo, {isComplete: !todo.isComplete}) : todo )
      console.log(newState)
      return newState

    case DELETE_TODO:
      return state.filter( todo => todo.id !== action.id )

    case DELETE_COMPLETED:
      return state.filter( todo => todo.isComplete === false )

    default:
      return state;
  }
}