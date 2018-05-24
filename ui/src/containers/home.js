import React, { Component } from 'react';
import { Paper } from "material-ui";

class Home extends Component {

  render() {
    return (
      <div className="home">
        <Paper className="content">
          <h1>Seja bem vindo ao Electron</h1>
        </Paper>
      </div>
    );
  }
}

export default Home;