import React, { Component } from 'react';

//Material-UI
import Button from 'material-ui/Button';

export default class Btn extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const {
            increment,
            decrement,
         } = this.props;

        return (
            <div>


                <div>
                    <Button raised color="primary" onClick={increment}>
                        +
      </Button>
                </div>
                <div>
                    <Button raised color="accent" onClick={decrement}>
                        -
      </Button>
                </div>

            </div>
        );
    }
}

