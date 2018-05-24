import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import {
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import ReduxThunk from "redux-thunk";
import { MuiThemeProvider } from "material-ui";

import Reducers from "./reducers";
import Urls from "./constants/urls";

import './App.css';

const history = createHistory();

const store = createStore(
  Reducers,
  {},
  compose(
    applyMiddleware(
      ReduxThunk,
      routerMiddleware(history)
    )
  )
);

class App extends Component {

  getRoutes() {
    const routesList = [];
    Urls.forEach( (value, index) => {
      if (value.redirect) {
        routesList.push(
          <Redirect to={value.to} key={index} />
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
      </Provider>
    );
  }
}

export default App;
