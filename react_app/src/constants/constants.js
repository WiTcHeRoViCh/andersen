import { VISIBILITY } from "./ActionTypes";

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VISIBILITY;

export default {
  buttons: [
    { label: "all", filterFunctionType: SHOW_ALL },
    { label: "active", filterFunctionType: SHOW_ACTIVE },
    { label: "completed", filterFunctionType: SHOW_COMPLETED },
  ],
  formField: {
    inSearch: ["Add new task", "find", true],
    inAdding: ["To find by", "done", false],
  },
  chipStyle: {
    chip: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 1,
      height: 50,
      width: "100%",

      backgroundColor: "white",
      borderRadius: 0,
    },
    labelStyle: {
      display: "flex",
      flexDirection: "row",
    }
  },
  filterFunctions: {
    SHOW_ALL: todos => todos,
    SHOW_ACTIVE: todos => todos.filter( todo => todo.isComplete === false),
    SHOW_COMPLETED: todos => todos.filter( todo => todo.isComplete === true),
  },
  status: {
    request: {
      getTodoListRequest: true,
      getTodoListSuccess: false,
      getTodoListFailure: false
    },
    success: {
      getTodoListRequest: false,
      getTodoListSuccess: true,
      getTodoListFailure: false
    },
    failure: {
      getTodoListRequest: false,
      getTodoListSuccess: false,
      getTodoListFailure: true
    }
}

};
