const init = {
    todoList: ["a", "b", "c", "d"],
    msg: "",
};

export default function todoListReducer(state = init, action) {
    switch (action.type) {
        case "ADDTODO":

            state.todoList.push(state.msg);

            state = {
                ...state,
                msg: "",
            };
            return state;

        case "DELETETODO":
           state.todoList.splice(action.index, 1);
           state = {
               ...state,
               todoList: state.todoList,
           };
            return state;
        case "CHANGEMSG":

            state = {
                ...state,
                msg: action.event.target.value,
            };
            return state;

        default:
            return state;
    }
}