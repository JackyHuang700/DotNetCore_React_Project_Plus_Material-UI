import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Show from '../components/Show';
import Btn from '../components/Btn';

import * as counterAction from '../actions/counterAction';

class ReactRedux extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     number: 0,
        // };
    }

    render() {


        const {
            counterAction,
            number,
        } = this.props;

        return (
            <div>
                <Show number={number} />
                <Btn
                    increment={counterAction.incrementAction}
                    decrement={counterAction.decrementAction}
                />
            </div>
        );
    }
}



//
const mapStateToProps = (state) => {
    return {
        number: state.conuterReducer,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        counterAction: bindActionCreators(counterAction, dispatch),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ReactRedux);