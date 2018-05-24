import React, { PureComponent } from "react";
import {
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import Urls from "./constants/urls";

class Routes extends PureComponent {
	render() {
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
	    return (
	    	<ConnectedRouter history={this.props.history}>
	    		<Switch>{routesList}</Switch>
	    	</ConnectedRouter>
	    );
	}
}

export default Routes;