import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userNameListAction from '../actions/userNameListAction';

class UserNameList extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {
            userNameObject,
            userNameListAction
        } = this.props;

        return (
            <div>
                <ul>
                    {
                        userNameObject.userNameList.map((d, index) => {
                            return (
                                <li key={index} onClick={userNameListAction.selectAction.bind(this, d)}>
                                    {d.first} {d.last}
                                </li>
                            )
                        })
                    }
                </ul>

                <UserDetail user={userNameObject.selectUser} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userNameObject: state.userNameListReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userNameListAction: bindActionCreators(userNameListAction, dispatch),
    };

}

export default connect(mapStateToProps, mapDispatchToProps)(UserNameList);




class UserDetail extends Component {

    RenderController() {
        const {
          user
        } = this.props;

        let render = {};

        if (!user) {
            render = (
                <h3>Select a User...</h3>
            );
        } else {
            render = (
                <span>
                    <h3>
                        User Detail
                    </h3>
                    <img src={user.thumbnail} />
                    <h2>{user.first} {user.last}</h2>
                    <h3>Age: {user.age}</h3>
                    <h3>Description: {user.description}</h3>
                </span>
            );
        }

        return render;
    }


    render() {

        return (
            <div>
                {this.RenderController()}
            </div>
        );
    }
}
