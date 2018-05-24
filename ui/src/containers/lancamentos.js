import React, { Component } from 'react';
import { Paper } from "material-ui";

class Home extends Component {

  render() {
    return (
      <div className="lancamentos">
        <Paper className="content">
          <h1>Lançamentos</h1>
          <a onClick={e => window.open()}>Abrir modal</a>
        </Paper>
      </div>
    );
  }
}

export default Home;