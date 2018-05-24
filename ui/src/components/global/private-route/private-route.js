import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Redirect } from "react-router-dom";
import { withCookies } from "react-cookie";
import _ from "lodash";
import { checkSession } from "../../../actions/session";

class PrivateRoute extends PureComponent {

  isLogged() {
    return this.props.session || this.props.cookies.get("logged");
  }

  render() {
    const Component = this.props.component;
    return (
      <Route {..._.omit(this.props, "component")} render={props => {
         return(
           this.isLogged() ? (
             <Component {...props}/>
           ) : (
            <Redirect to={{
              pathname: '/',
              state: {from: props.location}
            }}/>
          )
        )
      }}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    session: state.session,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    checkSession: token => dispatch(checkSession(token))
  }
};


export default withCookies(withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)));
