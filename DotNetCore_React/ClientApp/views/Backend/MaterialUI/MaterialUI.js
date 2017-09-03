import React, { Component } from 'react';
import Button from 'material-ui/Button';
// import aa from './aa.js';

import { MuiThemeProvider,  createMuiTheme} from 'material-ui/styles';
  

const theme = createMuiTheme({
   
  });


export default class MaterialUI extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {

        return (
            <MuiThemeProvider theme={theme}>
                <div>
               
                    <Button >Default</Button>
                </div>

            </MuiThemeProvider>

        )
    }
}


