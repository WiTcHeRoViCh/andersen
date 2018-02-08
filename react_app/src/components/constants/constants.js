const constants = {
  buttons: [
    { label: "all", filterFunction: todos => todos },
    { label: "active", filterFunction: todos => todos.filter( todo => todo.isComplete === false) },
    { label: "completed", filterFunction: todos => todos.filter( todo => todo.isComplete === true) },
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
  }
};

export default constants;
