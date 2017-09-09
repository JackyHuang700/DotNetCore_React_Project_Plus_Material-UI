import React, { Component } from 'react';


export default class Show extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const { number } = this.props;
        return (
            <div>
                {number}
            </div>
        );
    }
}

