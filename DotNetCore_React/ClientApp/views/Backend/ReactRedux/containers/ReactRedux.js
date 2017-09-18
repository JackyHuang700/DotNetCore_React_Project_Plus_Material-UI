import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Show from '../components/Show';
import Btn from '../components/Btn';

import * as counterAction from '../actions/counterAction';

//new Component
import TodoList from './TodoList';
import UserNameList from './UserNameList';

//redux form
import SimpleForm from "./ReduxForm";



class ReactRedux extends Component {

    constructor(props) {
        super(props);
    }

    render() {


        const {
            counterAction,
            counter,
        } = this.props;

        return (
            <div>
                <h1>實作Redux技術</h1>
                <h1>計數器</h1>
                <Show number={counter.number} />
                <Btn
                    increment={counterAction.incrementAction}
                    decrement={counterAction.decrementAction}
                />
                <hr />
                <h1>TodoList</h1>
                <TodoList />
                <hr />
                <h1>Username List</h1>
                <UserNameList />

                <h1>ReduxForm</h1>
                <SimpleForm />
            </div>
        );
    }
}



//
const mapStateToProps = (state) => {
    return {
        counter: state.conuterReducer,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        counterAction: bindActionCreators(counterAction, dispatch),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ReactRedux);


