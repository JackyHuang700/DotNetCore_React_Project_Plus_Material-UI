import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Show from '../components/Show';
import Btn from '../components/Btn';

import * as counterAction from '../actions/counterAction';

//new Component
import TodoList from './TodoList';


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
                <Show number={counter.number} />
                <Btn
                    increment={counterAction.incrementAction}
                    decrement={counterAction.decrementAction}
                />
                <br />
                <TodoList />
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