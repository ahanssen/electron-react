import React, { PureComponent } from 'react';
import { Provider } from "react-redux";
import { MuiThemeProvider } from "material-ui";
import { configureStore, history } from './store';

import Routes from "./routes";
import './App.css';

import AppBar from "./components/app-bar";

const store = configureStore();

class App extends PureComponent {

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div>
            <AppBar />
            <div className="routes">
              <Routes history={history} />
            </div>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
