import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';


export default class MaterialUI extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {

        return (
            <MuiThemeProvider>
    <div>Hello world</div>
  </MuiThemeProvider>
        )
    }
}