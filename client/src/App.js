import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./components/static/home";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import All from "./components/static/facts/all/all";
import AddFact from "./components/static/facts/all/addFact";
import FactDescription from "./components/static/facts/all/factDescription";
import Technical from "./components/static/facts/technical/technical";
import Interesting from "./components/static/facts/interesting/interesting";
import Inovation from "./components/static/facts/inovational/inovational";
import Inspirational from "./components/static/facts/inspirational/inspirational";
import { startLogoutUser } from "./actions/userAction";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleLogout = () => {
    this.props.dispatch(startLogoutUser());
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className=" navbar navbar-expand-md navbar-dark bg-dark">
            {Object.keys(this.props.user).length == 0 ? (
              <a className="navbar-brand" href="">
                <h3>
                  Did You Know{" "}
                  <i
                    class="fa fa-question-circle  fa-lg"
                    aria-hidden="true"
                  ></i>
                  <i
                    class="fa fa-question-circle-o  fa-lg"
                    aria-hidden="true"
                  ></i>
                  <i class="fa fa-question  fa-lg" aria-hidden="true"></i>
                </h3>
              </a>
            ) : (
              <div>
                <a className="navbar-brand" href="">
                  {" "}
                  <h3 className="name">Hello, {this.props.user.username}</h3>
                </a>
              </div>
            )}

            <div className="navbar-nav ml-auto">
              {Object.keys(this.props.user).length == 0 ? (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      <i class="fa fa-home" aria-hidden="true"></i>
                      &nbsp; Home
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/register">
                      <i class="fa fa-user-plus" aria-hidden="true"></i>
                      &nbsp; Sign Up
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/login">
                      <i class="fa fa-sign-in icon" aria-hidden="true" />
                      &nbsp; Sign In
                    </Link>
                  </li>
                </ul>
              ) : (
                <div>
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"></li>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/all">
                        All
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/technical">
                        <i class="fa fa-cogs" aria-hidden="true"></i>
                        &nbsp; Technical
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/interesting">
                        <i class="fa fa-gavel" aria-hidden="true"></i>
                        &nbsp; Interesting
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/inovation">
                        <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                        &nbsp; Inovation
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/inspirational">
                        <i class="fa fa-trophy" aria-hidden="true"></i>
                        &nbsp;Inspirational
                      </Link>
                    </li>

                    <li className="nav-item active">
                      <Link
                        className="nav-link"
                        onClick={this.handleLogout}
                        to="/logout"
                      >
                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                        &nbsp; Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <Switch>
            <Route path="/" component={Home} exact={true}></Route>
            <Route path="/login" component={Login} exact={true}></Route>
            <Route path="/logout" exact={true}></Route>
            <Route path="/register" component={Register} exact={true}></Route>
            <Route path="/all" component={All} exact={true}></Route>
            <Route path="/technical" component={Technical} exact={true}></Route>
            <Route
              path="/interesting"
              component={Interesting}
              exact={true}
            ></Route>
            <Route path="/inovation" component={Inovation} exact={true}></Route>
            <Route
              path="/inspirational"
              component={Inspirational}
              exact={true}
            ></Route>
            <Route path="/ADD" component={AddFact} exact={true}></Route>
            <Route
              path="/technical/:id"
              component={FactDescription}
              exact={true}
            ></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(App);
