import React, { PureComponent } from 'react';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { ConnectedRouter, routerReducer, routerMiddleware, push } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { CookiesProvider } from 'react-cookie';
import ReduxThunk from "redux-thunk";

import Reducers from "./reducers";
import Urls from "./constants/urls";

import PrivateRoute from "./components/global/private-route/private-route";

import logo from './logo.svg';
import './App.css';

const history = createHistory();

const store = createStore(
  Reducers,
  {},
  compose(
    applyMiddleware(
      ReduxThunk,
      routerMiddleware(history)
    ),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

class App extends PureComponent {

  getRoutes() {
    const routesList = [];
    Urls.forEach( (value, index) => {
      if (value.redirect) {
        routesList.push(
          <Redirect to={value.to} key={index} />
        );
        return;
      }

      if (value.secure) {
        routesList.push(
          <PrivateRoute {...value} key={index} />
        );
        return;
      }

      routesList.push(
        <Route {...value} key={index} />
      );
    });
    return routesList;
  }


  render() {
    /*if you wanna custom muiThemeProvider /**/
    const routes = this.getRoutes();
    return (
      <Provider store={store}>
        <CookiesProvider>
          <ConnectedRouter history={history}>
            <MuiThemeProvider>
              <div>
                <div className="routes">
                  <Switch>
                    {routes}
                  </Switch>
                </div>
              </div>
            </MuiThemeProvider>
          </ConnectedRouter>
        </CookiesProvider>
      </Provider>
    );
  }
}

export default App;
