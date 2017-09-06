import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'

import history from './history'
import routes from './routes'
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

//material-ui

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';


const theme = createMuiTheme({

});



// Views
const renderApp = appRoutes => {
  ReactDOM.render((
    <AppContainer>
      <MuiThemeProvider theme={theme}>
        <Router history={history}>
          <div>
            {appRoutes}
          </div>
        </Router>
      </MuiThemeProvider>
    </AppContainer>
  ), document.getElementById('react-app'));
}

renderApp(routes);


//Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextApp = require('./routes').default;
    renderApp(routes);
  });
}