import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Paper } from "material-ui";

class Home extends Component {

  render() {
    return (
      <div className="lancamentos">
        <Paper className="content">
          <h1>Lançamentos</h1>
        </Paper>
      </div>
    );
  }
}

export default Home;