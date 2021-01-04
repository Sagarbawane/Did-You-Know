import React from "react";
import { connect } from "react-redux";
import { startGetAddFact } from "../../../../actions/factAction";

class AddFact extends React.Component {
  constructor() {
    super();
    this.state = {
      type: "select",
      title: "",
      description: "",
      imageLink: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleDropdownChange = (e) => {
    this.setState({ type: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: this.props.user.username,
      type: this.state.type,
      title: this.state.title,
      description: this.state.description,
      imageLink: this.state.imageLink,
    };
    this.props.dispatch(startGetAddFact(formData));
    this.props.history.push(`/all`);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label>Title</label>
            <textarea
              class="form-control"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            ></textarea>
          </div>

          <div class="form-group">
            <label>Example select</label>

            <select
              id="dropdown"
              class="form-control"
              onChange={this.handleDropdownChange}
              value={this.state.type}
            >
              <option value="select">Select</option>
              <option value="technical">Technical</option>
              <option value="interesting">Interesting</option>
              <option value="inspirational">Inspirational</option>
              <option value="inovational">Inovational</option>
            </select>
          </div>

          <div class="form-group">
            <label>Example textarea</label>
            <textarea
           
              class="form-control"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              rows="3"
            ></textarea>
          </div>
          <div class="form-group">
            <label>Image Link</label>
            <input
              class="form-control"
              type="text"
              name="imageLink"
              value={this.state.imageLink}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" class="btn btn-success btn-lg" value="submit" />
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(AddFact);
