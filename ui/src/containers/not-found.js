import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class NotFound extends PureComponent {

  goBack(e) {
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="404-page">
        <h1>Ops! Page not found</h1>
        <Link to="/">Go back</Link>
      </div>
    );
  }
}

export default withRouter(NotFound);