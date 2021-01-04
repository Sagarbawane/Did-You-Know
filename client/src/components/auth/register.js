import React from "react";
import { connect } from "react-redux";
import { startRegisterUser } from "../../actions/userAction";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    const redirect = () => {
      this.props.history.push("/login");
    };
    this.props.dispatch(startRegisterUser(formData, redirect));
  };
  render() {
    return (
      <div className="container">
        <div class="row">
          <div class="col-lg-9 ">
            <h1>Let's Get Started</h1>
            <form class="form-horizontal" onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <div class="col-sm-10">
                  <label>
                    <h6>UserName:</h6>
                  </label>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  ></input>{" "}
                  <h6>Minium 8 character</h6>
                </div>
              </div>

              <br />
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
              <div className="form-group row">
                <div class="col-sm-10">
                  <label>
                    <h6>Password:</h6>
                  </label>
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  ></input>{" "}
                  <h6>Minium 8 Character With One Special Character</h6>
                </div>
              </div>

              <br />
              <input
                className="btn btn-lg btn-success  "
                type="submit"
                value="Register"
              />
            </form>
          </div>
          <div class="col-lg -3">
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
export default connect(mapStateToProps)(Register);
