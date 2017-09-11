import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as todoListAction from '../actions/todoListAction';


// import Btn_DeleteTodo from './btn_DeleteTodo';

class TodoList extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const {
    todoObject,
            todoListAction,
} = this.props;

        return (
            <div>
                <ShowMsg
                    todoList={todoObject.todoList}
                    deleteTodoAction={todoListAction.deleteTodoAction}
                />
                <Input_Todo
                    changeMsgAction={todoListAction.changeMsgAction}
                    msg={todoObject.msg}
                />
                <Btn_AddTodo
                    addTodoAction={todoListAction.addTodoAction}
                />

            </div>
        );
    }
}


const mapStateToProps = (state) => {

    return {
        todoObject: state.todoListReducers,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        todoListAction: bindActionCreators(todoListAction, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);



class ShowMsg extends Component {
    render() {

        const {
    todoList,
            deleteTodoAction
} = this.props;

        return (
            <div>
                <ul>
                    {todoList.map((todo, index) => {
                        return (
                            <li key={index}>
                                {todo}
                                {'\u00A0'}{'\u00A0'}
                                <button onClick={deleteTodoAction.bind(this, index)}> -- </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}



class Btn_AddTodo extends Component {
    render() {

        const {
    addTodoAction,
} = this.props;

        return (
            <div>

                <button onClick={addTodoAction}> ++ </button>
            </div>
        );
    }
}




class Input_Todo extends Component {
    render() {
        const {
            changeMsgAction,
            msg,
        } = this.props;

        return (
            <div>
                <input type="text"
                    onChange={changeMsgAction}
                    value={msg}
                />
            </div>
        );
    }
}