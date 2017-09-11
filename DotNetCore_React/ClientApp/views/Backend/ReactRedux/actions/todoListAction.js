export const addTodoAction = () => {
    return {
        type: "ADDTODO",
    };
}


export const deleteTodoAction = (index, event) => {
    return {
        type: "DELETETODO",
        index,
        event, 
    }
}

export const changeMsgAction = (event) => {
    return {
        type: "CHANGEMSG",
        event
    };
}