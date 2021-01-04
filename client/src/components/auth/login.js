import React from "react";

import { connect } from "react-redux";
import { startLoginUser } from "../../actions/userAction";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      type: false,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handlePassword = () => {
    this.setState((prevstate) => {
      return {
        type: !prevstate.type,
      };
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: this.state.email,
      password: this.state.password,
    };
    const redirect = () => {
      this.props.history.push("/account");
    };
    this.props.dispatch(startLoginUser(formData, redirect));
  };
  render() {
    return (
      <div className="container">
        <div class="row">
          <div class="col-lg-8 ">
            <h1 className="title2">Sign In</h1>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <form class="form-horizontal" onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <div class="col-sm-10">
                  <label>
                    <h6>Email:</h6>
                  </label>
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  ></input>{" "}
                </div>
              </div>
              <br />
              <div className="form-group row ">
                <div class="col-sm-10">
                  <label>
                    <h6>Password:</h6>
                  </label>
                  <input
                    className="form-control form-control-lg"
                    type={this.state.type == false ? "password" : "type"}
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  ></input>{" "}
                  <div className="eye">
                    <i
                      class="fa fa-eye fa-2x"
                      onClick={this.handlePassword}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </div>
                </div>
              </div>
              <br />

              <input
                className="btn btn-lg btn-success  "
                type="submit"
                value="login"
              ></input>
            </form>
          </div>
          <div class="col-lg -4">
            <img
              className="img"
              width="100%"
              height="100%"
              src=" https://www.nvkt.nl/wp-content/uploads/2015/04/man_leaning_on_big_red_question_mark-205x300.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(Login);
