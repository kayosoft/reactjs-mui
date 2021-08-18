import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
  Redirect,
} from "react-router-dom";
import LayoutComponent from "../components/Layout/Layout.js";
import ErrorPage from "../pages/error/ErrorPage.js";
import Login from "../pages/login/Login.js";
import Register from "../pages/register/Register.js";
import { logoutUser } from "../actions/auth.js";

import "../styles/app.scss";

const PrivateRoute = ({ dispatch, component, ...rest }) => {
  if (
    !Login.isAuthenticated(JSON.parse(localStorage.getItem("authenticated")))
  ) {
    dispatch(logoutUser());
    return <Redirect to="/login" />;
  } else {
    return (
      <Route
        {...rest}
        render={(props) => React.createElement(component, props)}
      />
    );
  }
};

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Redirect to="/template/dashboard" />}
            />

            <PrivateRoute
              path="/template"
              dispatch={this.props.dispatch}
              component={LayoutComponent}
            />
            <Route path="/login" exact component={Login} />
            <Route path="/error" exact component={ErrorPage} />
            <Route path="/register" exact component={Register} />
            <Route
              path="*"
              exact={true}
              render={() => <Redirect to="/error" />}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
