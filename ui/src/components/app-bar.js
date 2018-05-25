import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { AppBar, FlatButton,  } from "material-ui";

import { history } from "../store";

import "./app-bar.css";

const menuItems = [
  { label: "Top 10 Clientes", url: "/top-10"},
  { label: "System Info", url: "/system-info"}
];

class AppBarHome extends PureComponent {

  getTitle() {
    return (
      <div className="app-bar-title">
        equipe sistemas
      </div>
    )
  }

  getRight() {
    return (
      <ul className="menu">
        {
          menuItems.map( (menu, index) => {
            return (
              <li className="user-info" key={index}>
                <FlatButton label={menu.label} className="nav-button" onClick={e => history.push(menu.url)} />
              </li>
            )
          })
        }
      </ul>
    );
  }

  getAppBar() {
    return (
      <AppBar
        className="app-bar"
        showMenuIconButton={true}
        title={this.getTitle()}
        onTitleClick={e => history.push("/")}
      >
        {this.getRight()}
      </AppBar>
    );
  }

  render() {
    return (
      <div>
        {this.getAppBar()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBarHome);
