import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'

import history from './history'
import routes from './routes'
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

//material-ui

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'


//redux
import { Provider } from 'react-redux';
import configureStore from './views/Backend/ReactRedux/store/configureStore';

const theme = createMuiTheme({
  // palette: createPalette({
  //   primary: green,
  //   accent: red,
  //   type: 'light',
  // }),
});

// Views
const renderApp = appRoutes => {
  ReactDOM.render((
    <AppContainer>
      <Provider store={configureStore}>
      <MuiThemeProvider theme={theme}>
          <Router history={history}>
            <div>
              {appRoutes}
            </div>
          </Router>
        </MuiThemeProvider>
      </Provider>
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