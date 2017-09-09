import React, { Component } from 'react';


export default class Btn extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const { increment,
            decrement } = this.props;

        return (
            <div>
                <button onClick={increment}> + </button>
                <button onClick={decrement}> - </button>
            </div>
        );
    }
}

